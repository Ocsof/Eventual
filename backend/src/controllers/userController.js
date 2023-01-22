const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken'); //todo: valutarne l'utilizzo -> token di autenticazione e autorizzazione

const UserModel = require('../models/userModel')(mongoose)

exports.sign_user = (req,res)=>{
    const email = req.body.email
    const username = req.body.username

    // controllo se l'email o il nome utente sono già presenti nel database
    User.findOne({ $or: [{ email }, { username }] }, (err, user) => {
        if (err) {
            res.status(500).json({error: 'Errore del server'});
        } else if (user) {
            res.status(409).json({error: 'Email o nome utente già in uso'});
        } else {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    const user = new UserModel(req.body);
                    user.save()
                        .then(result => {
                            res.status(201).json({
                                message: 'Utente creato con successo!',
                                result: result
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err
                            });
                        });
                });
        }
    })
}

exports.log_user = (req, res)=>{
    let fetchedUser;
    UserModel.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Autenticazione fallita'
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .catch(err => {
            return res.status(401).json({
                message: 'Autenticazione fallita'
            });
        });
}
