const mongoose = require('mongoose');
const EventModel = require('../models/eventModel')(mongoose)

exports.new_event = (req,res)=>{
    const Event = new EventModel(req.body);
    Event.save((err,doc)=>{
        if(err){
            res.send(err);
        }
        res.send(doc)
    })
}

/*
il metodo find() cerca tutti i documenti all'interno della collezione 'Event' con la proprietà category uguale
al valore passato come parametro nell'URL, che viene recuperato con req.params.category.
Se vengono trovati documenti, vengono restituiti all'utente, altrimenti viene restituito un array vuoto.
Questo query restituirà tutti gli eventi appartenenti alla categoria desiderata e con data maggiore  o uguale alla data attuale
*/
exports.read_eventsByCategory = (req, res) => {
    EventModel.find({category: req.params.category, date:{$gte: new Date()}},
        (err, events) => {
            if (err) {
                res.status(500).json({error: err});
            } else {
                res.json(events);
            }
        })
}

exports.read_tenMostRecentEvents = (req, res) => {
    EventModel.find({date:{$gte: new Date()}}).sort({ date: -1 }).limit(10).exec((err, events) => {
        if (err) {
            res.status(500).json({ error: 'Errore del server' });
        } else {
            res.json(events);
        }
    });
}

/** leggere gli utenti registrati all'evento **/
exports.read_myUsers = (req, res) => {
    EventModel.findOne({title: "Event 1"})
        .populate('users')
        .exec((err, event) => {
            if(err){
                res.send(err);
            }
            res.json(event.users);
        })
}





