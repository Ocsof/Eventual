const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken'); //todo: valutarne l'utilizzo -> token di autenticazione e autorizzazione

const UserModel = require('../models/userModel')(mongoose)

exports.sign_user = (req,res)=>{
    const { name, surname, email, phone, password, birthday, category} = req.body;
    // controllo se l'email è già presente nel database
    UserModel.findOne({"email": email}, (err, user) => {
        if (err) {
            res.status(500).json({ error: 'Errore del server' });
        } else if (user != null) {
            res.status(409).json({error: 'Email utente già in uso'});
        } else {
            bcrypt.hash(password, 10, (err, hash) => { //10 numero di round di cifratura
                if (err) {
                    res.status(500).json({error: 'Errore del server'});
                }
                const newUser = new UserModel({
                    name,
                    surname,
                    email,
                    phone,
                    password: hash,
                    birthday,
                    category,
                    inscriptions: [],
                    my_organizations: []
                });
                //newUser.birthday = new Date(birthday)
                newUser.save((err) => {
                    if (err) {
                        //res.send("Salvataggio non possibile, alcuni campi non sono stati compilati");
                        res.status(500).json({ error: 'Errore del server' });
                    }
                    res.status(200).json({description:`User per ${name} ${surname} creato`});
                });
            })
        }
    })
}

/*** se tutto va a buon fine restituisco user cosi lato frontend ha tutte le info dell'utente appena loggato ***/
exports.log_user = (req, res)=> {

    UserModel.findOne({"email": req.body.email}, (err, user) => {
        if (err){
            res.status(500).json({ error: 'Errore del server' });
        } else if (!user){
            res.status(404).json({error: 'Utente non trovato'});
        } else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                const clearPassword = req.body.password;

                if (err){
                    res.status(500).json({ error: 'Errore del server' });
                }
                if (!result){
                    res.status(401).json({error: 'Password errata'});
                }
                user.password = clearPassword;
                res.status(200).json(user);
            });
        }
    })
}

/*** per aggiornare l'utente, es: iscrizione ad un evento **/
exports.update_user = (req,res)=>{
    const idUser = mongoose.Types.ObjectId(req.params._id) //per castare l'id passato come parametro in objectid
    const user = req.body
    //bisogna rihashare la password
    bcrypt.hash(req.body.password, 10, (err, hash) => { //10 numero di round di cifratura
        if (err) {
            res.status(500).json({error: 'Errore del server'});
        }
        user.password = hash
        UserModel.findByIdAndUpdate(idUser,user,{new: true},(err,doc)=>{
            if(err){
                res.status(500).json({ error: 'Errore del server' });
            }
            res.status(200).json(doc);
        })
    })
}

/**** Eliminare uno specifico utente. Solo admin può farlo****/
exports.delete_user = (req,res)=>{
    const idUser = mongoose.Types.ObjectId(req.params._id)
    UserModel.findById(idUser,(err,user)=>{
        if(err) {
            res.status(500).json({ error: 'Errore del server' });
        }
        if (!user) {
            res.status(404).json({ error: 'User non trovato'});
        }
        if (user.category === 'a') {
            res.status(400).json({error: 'Admin non pùò essere eliminato'});
        }
        user.remove((err, doc) =>{
            if (err) {
                res.status(500).json({ error: 'Errore del server' });
            }
            res.status(200).json({description: 'User cancellato con successo'});
        });
    })
}

exports.read_allusers = (req, res)=>{
    UserModel.find({}, (err, users)=>{
        if (err) {
            res.status(500).json({ error: 'Errore del server' });
        }
        res.status(200).json(users);
    });
}

/** leggere gli eventi a cui si è registrato un utente **/
exports.read_myinscriptions = (req, res) => {
    const idUser = mongoose.Types.ObjectId(req.params._id) //per castare l'id passato come parametro in objectid
    UserModel.findById(idUser)
        .populate('inscriptions')
        .exec((err, user) => {
            if(err){
                res.status(500).json({ error: 'Errore del server' });
            }
            res.status(200).json(user.inscriptions);
        })
}

exports.read_myorganizations = (req, res) => {
    const idUser = mongoose.Types.ObjectId(req.params._id) //per castare l'id passato come parametro in objectid
    UserModel.findById(idUser)
        .populate('my_organizations')
        .exec((err, user) => {
            if(err){
                res.status(500).json({ error: 'Errore del server' });
            }
            res.status(200).json(user.my_organizations);
        })
}

exports.get_user = (req, res) =>{
    const idUser = mongoose.Types.ObjectId(req.params._id) //per castare l'id passato come parametro in objectid
    console.log(idUser)
    UserModel.findById(idUser)
        .exec((err, user) => {
            if(err){
                res.status(500).json({ error: 'Errore del server' });
            }
            res.status(200).json(user)
        })
}

