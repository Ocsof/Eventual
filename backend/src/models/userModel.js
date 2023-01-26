const mongoose = require("mongoose");
const {Schema} = require("mongoose");


module.exports =  (mongoose)=>{
    const userSchema = new mongoose.Schema({
        name:  {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: Number,
        password: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        //events: [Schema.Types.ObjectId]
        events: [{ type: Schema.Types.ObjectId, ref: 'Events' }] //todo come speicificare ObjectID degli eventi?
    })
    return mongoose.model('Users',userSchema)
}