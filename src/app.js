const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup" , async (req , res) => {
    //Creating a new instance of a User model
    const user = new User(req.body);

    try{
      await user.save();
        res.send("User signed up successfully");
    } catch(err){
        res.status(400).send("Error while signing up...!!");
    }
   
});


connectDB().then(() => {
    console.log("Database connection established!!");
    app.listen(3000 , () => {
    console.log("The server is running on this port!!");
});
})
.catch((err) => {
    console.error("Database connot be connected!!");
});
