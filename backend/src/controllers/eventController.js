const mongoose = require('mongoose');
const EventModel = require('../models/eventModel')(mongoose)

exports.read_tenMostRecentEvents = (req, res) => {
    EventModel.find({date:{$gte: new Date()}}).sort({ date: 1 }).limit(10).exec((err, events) => {
        if (err) {
            res.status(500).json({ error: 'Errore del server' });
        } else {
            res.json(events);
        }
    });
}

exports.new_event = (req,res)=>{
    const idAuthor = mongoose.Types.ObjectId(req.body.author)
    const date = new Date(req.body.date);
    const Event = new EventModel({
        title: req.body.title,
        author: idAuthor,
        category: req.body.category,
        date: date,
        description: req.body.description
    })
    Event.save((err,doc)=>{
        if(err){
            res.send(err);
        }
        res.send(doc)
    })
}

/***Sempre dal più recente (da adesso in poi)***/
exports.read_allevents = (req, res)=>{
    EventModel.find({date:{$gte: new Date()}}).sort({ date: 1 }).exec((err, events) => {
        if (err) {
            res.status(500).json({ error: 'Errore del server' });
        } else {
            res.json(events);
        }
    });
}

exports.read_event = (req, res)=>{
    const idEvent = mongoose.Types.ObjectId(req.params._id)
    EventModel.findById(idEvent).exec((err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
}

exports.update_event = (req, res)=>{
    const idEvent = mongoose.Types.ObjectId(req.params._id)
    const event = req.body
    EventModel.findByIdAndUpdate(idEvent,event,{new: true},(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
}

exports.delete_event = (req, res)=>{
    const idEvent = mongoose.Types.ObjectId(req.params._id)
    EventModel.findByIdAndDelete(idEvent,(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json("event deleted");
    })
}

/*
il metodo find() cerca tutti i documenti all'interno della collezione 'Event' con la proprietà category uguale
al valore passato come parametro nell'URL, che viene recuperato con req.params.category.
Se vengono trovati documenti, vengono restituiti all'utente, altrimenti viene restituito un array vuoto.
Questo query restituirà tutti gli eventi appartenenti alla categoria desiderata e con data maggiore  o uguale alla data attuale
*/
exports.read_eventsByCategory = (req, res) => {
    let category = req.params.category;
    EventModel.find({category: category, date:{$gte: new Date()}},
        (err, events) => {
            if (err) {
                res.status(500).json({error: err});
            } else {
                res.json(events);
            }
        })
}


/** leggere gli utenti registrati all'evento **/
exports.read_myUsers = (req, res) => {
    const idEvent = mongoose.Types.ObjectId(req.params._id)
    EventModel.findById(idEvent)
        .populate('users')
        .exec((err, event) => {
            if(err){
                res.send(err);
            }
            res.json(event.users);
        })
}





