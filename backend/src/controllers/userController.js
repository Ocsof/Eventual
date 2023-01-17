const mongoose = require('mongoose');
const userModel = require('../models/userModel')(mongoose)
//import { serverID } from '../index.js';

exports.create_user = (req,res)=>{
    const User = new userModel(req.body);
    User.save((err,doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
}

exports.log_user = (req, res)=>{
     userModel.findOne({username: req.body.username, password: req.body.password}, (err, user) => {
        if (err) {
            res.status(500).json({error: err});
        } else if (!user) {
            res.status(404).json({message: 'Username o password errati'});
        } else {
            res.json(user);
        }
    });
}
