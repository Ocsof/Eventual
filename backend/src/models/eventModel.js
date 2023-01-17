module.exports =  (mongoose)=>{
    const eventSchema = new mongoose.Schema({
        title:  String, // String is shorthand for {type: String}
        author: String,
        image: String,
        category: String,
        date: Date,
        description: String
    })
    return mongoose.model('Event',eventSchema)
}