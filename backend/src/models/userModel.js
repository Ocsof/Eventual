const mongoose = require("mongoose");
const {Schema} = require("mongoose");


module.exports =  (mongoose)=>{
    const userSchema = new mongoose.Schema({
        name:  String, // String is shorthand for {type: String}
        surname: String,
        email: String,
        phone: Number,
        password: String,
        category: String,
        //events: [Schema.Types.ObjectId]
        events: [{ type: Schema.Types.ObjectId, ref: 'Events' }] //todo come speicificare ObjectID degli eventi?
    })
    return mongoose.model('Users',userSchema)
}