module.exports =  (mongoose)=>{
    const userSchema = new mongoose.Schema({
        name:  String, // String is shorthand for {type: String}
        surname: String,
        email: String,
        phone: Number,
        password: String,
        category: String
    })
    return mongoose.model('Users',userSchema)
}