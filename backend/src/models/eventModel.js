module.exports =  (mongoose)=>{
    const eventSchema = new mongoose.Schema({
        hitBy:  String, // String is shorthand for {type: String}
    })
    return mongoose.model('Event',eventSchema)
}