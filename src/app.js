const express = require("express");

const app = express();

// app.use("/users" , (req, res) => {
//     res.send("Demo demo demo");
// });

//This will only handle GET call to /user
app.get("/users", (req , res) => {
    res.send({firstName:"Priya", lastName:"Reddy"});
});

app.post("/users" , (req, res) => {
    //saving data to DB
    res.send("Data succsessfully saved to the database!");
});

app.delete("/users" , (req, res) => {
    res.send("Data deleted successfully");
});

// app.use("/test", (req, res) => {
//     res.send("Server is running on this route");
// });

// app.use("/hello" , (req, res) => {
//  res.send("Hello hello hello");
// });

app.get("user/:userId/:name/:password" ,(req,res) => {
    console.log(req.params);   //Read dynamic route
    console.log(req.query);  //Read data
    res.send({firstName: "Priya", lastName: "Reddy"});
} )

app.listen(3000 , () => {
    console.log("Server is successfully listening on port 3000");
}); 