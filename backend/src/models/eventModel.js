const {Schema} = require("mongoose");
module.exports =  (mongoose)=>{
    const eventSchema = new mongoose.Schema({
        title:  {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        image: {
            type: String
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
        users: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
    })
    return mongoose.model('Events',eventSchema)
}