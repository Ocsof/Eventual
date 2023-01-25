const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken'); //todo: valutarne l'utilizzo -> token di autenticazione e autorizzazione

const UserModel = require('../models/userModel')(mongoose)

exports.sign_user = (req,res)=>{
    //const { name, surname, email, phone, password, category} = req.body;
    const newuser = {
        name: 'Andrea',
        surname: 'Leonardi',
        email: 'leo@normale.it',
        phone: 33647,
        password: "passwordPotente",
        category: 'normale',
        events: []
    }

    // controllo se l'email è già presente nel database
    UserModel.findOne({email: newuser.email}, (err, user) => {
        if (err) {
            res.status(500).send({error: 'Errore del server'});
        } else if (user != null) {
            res.status(409).send({error: 'Email utente già in uso'});
        }
        bcrypt.hash(newuser.password, 10, (err, hash) => { //10 numero di round di cifratura
            if (err) {
                res.status(500).send(err);
            }
            /*
            const newUser = new UserModel({
                name,
                surname,
                email,
                phone,
                password: hash,
                category,
                events: []
            });
            */
            const newUser = new UserModel({
                name: newuser.name,
                surname: newuser.surname,
                email: newuser.email,
                phone: newuser.phone,
                password: hash,
                category: newuser.category,
                events: []
            });
            newUser.save((err) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.send(`User ${newuser.name} ${newuser.surname} creato`);
            });
        })
    })
}

exports.log_user = (req, res)=> {
    UserModel.findOne({ email: "leo@normale.it" }, (err, user) => { //todo: sostituire con req.body.email
        if (err){
            res.status(500).send(err);
        }
        if (!user){
            res.status(404).send('Utente non trovato');
        }
        bcrypt.compare("passwordPotente", user.password, (err, result) => { //todo: sostituire il primo con req.body.password
            if (err){
                res.status(500).send(err);
            }
            if (!result){
                res.status(401).send('Password errata');
            }
            res.status(200).send(`Benvenuto ${user.name} ${user.surname}`);
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
    UserModel.findOne({email: "fra@admin.it"}) //todo, da cambiare con req.params.id
        .populate('events')
        .exec((err, user) => {
            if(err){
                res.send(err);
            }
            console.log(user.events[0].title)
            res.json(user.events);
        })
}


