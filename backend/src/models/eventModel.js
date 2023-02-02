const {Schema} = require("mongoose");
module.exports =  (mongoose)=>{
    const eventSchema = new mongoose.Schema({
        title:  {
            type: String,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId, ref: 'Users',
            required: true
        },
        category: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: false
        },
        users: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
    })
    return mongoose.model('Events',eventSchema)
}