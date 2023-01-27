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
        birthday: Date,
        category: {
            type: String,
            required: true
        },
        inscriptions: [{ type: Schema.Types.ObjectId, ref: 'Events' }],
        my_organizations: [{ type: Schema.Types.ObjectId, ref: 'Events' }]
    })
    return mongoose.model('Users',userSchema)
}