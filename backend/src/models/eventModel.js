const {Schema} = require("mongoose");
module.exports =  (mongoose)=>{
    const eventSchema = new mongoose.Schema({
        title:  String, // String is shorthand for {type: String}
        author: String,
        image: String,
        category: String,
        date: Date,
        description: String,
        //users: [Schema.Types.ObjectId]
        users: [{ type: Schema.Types.ObjectId, ref: 'Users' }] //todo come speicificare ObjectID degli eventi?
    })
    return mongoose.model('Events',eventSchema)
}