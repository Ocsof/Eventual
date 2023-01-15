const mongoose = require('mongoose');
const eventModel = require('../models/eventModel')(mongoose)

exports.update_hit = (req,res)=>{
    const Event = new eventModel({hitBy: serverID});
    Event.save((err,doc)=>{
        if(err){
            res.send(err);
        }
    })
    Event.count({}, (err, doc)=>{
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
}