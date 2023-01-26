const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken'); //todo: valutarne l'utilizzo -> token di autenticazione e autorizzazione

const UserModel = require('../models/userModel')(mongoose)

exports.sign_user = (req,res)=>{
    const { name, surname, email, phone, password, category} = req.body;
    // controllo se l'email è già presente nel database
    UserModel.findOne(email, (err, user) => {
        if (err) {
            res.status(500).send({error: 'Errore del server'});
        } else if (user != null) {
            res.status(409).send({error: 'Email utente già in uso'});
        }
        bcrypt.hash(password, 10, (err, hash) => { //10 numero di round di cifratura
            if (err) {
                res.status(500).send(err);
            }
            const newUser = new UserModel({
                name,
                surname,
                email,
                phone,
                password: hash,
                category,
                events: []
            });
            newUser.save((err) => {
                if (err) {
                    res.send("Salvataggio non possibile, alcuni campi non sono stati compilati");
                }
                res.send(`User per ${name} ${surname} creato`);
            });
        })
    })
}

/*** se tutto va a buon fine restiruisco user cosi lato frontend ha tutte le info dell'utente appena loggato ***/
exports.log_user = (req, res)=> {
    UserModel.findOne(req.body.email, (err, user) => {
        if (err){
            res.status(500).send(err);
        }
        if (!user){
            res.status(404).send('Utente non trovato');
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err){
                res.status(500).send(err);
            }
            if (!result){
                res.status(401).send('Password errata');
            }
            //res.status(200).send(`Benvenuto ${user.name} ${user.surname}`);
            res.status(200).json(user)
        });
    })
}

/*** per aggiornare l'utente, es: iscrizione ad un evento **/
exports.update_user = (req,res)=>{
    UserModel.findByIdAndUpdate(req.params.id,req.body,{new: true},(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
}

/** leggere gli eventi a cui si è registrato un utente **/
exports.read_myEvent = (req, res) => {
    UserModel.findOne({id: req.params.id})
        .populate('events')
        .exec((err, user) => {
            if(err){
                res.send(err);
            }
            console.log(user.events[0].title)
            res.json(user.events);
        })
}


