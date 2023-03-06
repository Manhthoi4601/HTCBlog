const mongoose= require("mongoose");
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const registerSchema= new mongoose.Schema({
    userId: {type:String,required: true},
    email: {type: String,required: true,unique:true},
    confirmpassword: {type:String,required:true, minLength: 6},
    slug: {type: String, slug:'userId', unique:true},
},
    
    {
        timestamps: true,
    }
)
// create a collection
const Register =new mongoose.model("Register",registerSchema);
 
module.exports =Register;