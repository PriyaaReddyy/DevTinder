const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minlength: [5, "Min length should be 8"], 
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
        trim : true
    },
    password : {
        type : String,
        required : true,
        minlength : 7
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
    }
},
{
    timestamps : true
});

module.exports = mongoose.model("User", userSchema);