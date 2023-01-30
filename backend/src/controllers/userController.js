const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken'); //todo: valutarne l'utilizzo -> token di autenticazione e autorizzazione

const UserModel = require('../models/userModel')(mongoose)

exports.sign_user = (req,res)=>{
    const { name, surname, email, phone, password, birthday, category} = req.body;
    // controllo se l'email è già presente nel database
    UserModel.findOne({"email": email}, (err, user) => {
        if (err) {
             res.status(500).send({error: 'Errore del server'});
        } else if (user != null) {
            res.status(409).send({error: 'Email utente già in uso'});
        } else {
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
                    birthday,
                    category,
                    inscriptions: [],
                    my_organizations: []
                });
                //newUser.birthday = new Date(birthday)
                newUser.save((err) => {
                    if (err) {
                        //res.send("Salvataggio non possibile, alcuni campi non sono stati compilati");
                        res.json(err)
                    }
                    res.status(200).send(`User per ${name} ${surname} creato`);

                });
            })
        }
    })
}

/*** se tutto va a buon fine restiruisco user cosi lato frontend ha tutte le info dell'utente appena loggato ***/
exports.log_user = (req, res)=> {

    UserModel.findOne({"email": req.body.email}, (err, user) => {
        if (err){
            res.status(500).send(err);
        } else if (!user){
            res.status(404).send('Utente non trovato');
        } else {
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
        }
    })
}

/*** per aggiornare l'utente, es: iscrizione ad un evento **/
exports.update_user = (req,res)=>{
    const idUser = mongoose.Types.ObjectId(req.params._id) //per castare l'id passato come parametro in objectid
    UserModel.findByIdAndUpdate(idUser,req.body,{new: true},(err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
}

/**** Elimanare uno specifico utente. Solo admin può farlo****/
exports.delete_user = (req,res)=>{
    const idUser = mongoose.Types.ObjectId(req.params._id)
    UserModel.findById(idUser,(err,user)=>{
        if(err) res.send(err);
        if (!user) return res.status(404).send('User non trovato');
        if (user.category === 'a') return res.status(400).send('Admin non pùò essere eliminato');
        user.remove((err, doc) =>{
            if (err) res.send(err);
            res.send('User successfully deleted.');
        });
    })
}

exports.read_allusers = (req, res)=>{
    UserModel.find({}, (err, users)=>{
        if (err) return res.send(err);
        res.send(users);
    });
}

/** leggere gli eventi a cui si è registrato un utente **/
exports.read_myinscriptions = (req, res) => {
    const idUser = mongoose.Types.ObjectId(req.params._id) //per castare l'id passato come parametro in objectid
    UserModel.findById(idUser)
        .populate('inscriptions')
        .exec((err, user) => {
            if(err){
                res.send(err);
            }
            console.log(user.inscriptions[0].title)
            res.json(user.inscriptions);
        })
}

exports.read_myorganizations = (req, res) => {
    const idUser = mongoose.Types.ObjectId(req.params._id) //per castare l'id passato come parametro in objectid
    UserModel.findById(idUser)
        .populate('my_organizations')
        .exec((err, user) => {
            if(err){
                res.send(err);
            }
            console.log(user.my_organizations[0].title)
            res.json(user.my_organizations);
        })
}


