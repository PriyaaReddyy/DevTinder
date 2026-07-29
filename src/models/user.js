const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength: [4, "Min length should be 4"], 
        // maxlength : 15
    } , 
    lastName : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true , 
        lowercase : true,
        trim : true ,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address");
            }
        }  
    },
    password : {
        type : String,
        required : true,
        minlength : 7,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Password is not strong");
            }
        }
    },
    age : {
        type : Number,
        min : 18
    },
    gender : {
        type : String,
        validate : function (value) {
         if(!["male" , "female", "others"].includes(value)){
            throw new Error("Invalid Gender");
         }
        }
    },
    about : {
        type : String,
        default : "This is the demo project",
    },
    photourl : {
        type : String,
        default : "https://www.mjunction.in/blog/pet-coke-effect-on-aluminium-cement-industry/dummy-2/",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid Url");
            }
        }
    }
},
{
    timestamps : true
});

module.exports = mongoose.model("User", userSchema);