/*

const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
    if (err) {
        //Log your error!!
        res.status(500).send("something went wrong");
    }
})

app.get("/getAllData", (req, res, next) => {
    try {
        throw new Error("hgsdv");
    } catch (err) {
        // res.status(500).send("Some error please contact support");
    }
});

app.use("/", (err, req, res, next) => {
    if (err) {
        //Log your error!!
        res.status(500).send("something went wrong");
    }
});

app.listen(3000, () => {
    console.log("Server is running on this port!! 3000");
})

*/

/*
const {adminAuth , userAuth} = require("./middlewares/auth");

//Handle auth middleware for all GET POST,.....requests
app.use("/admin" ,  adminAuth);

app.post("user/login" , (req, res) => {
    res.send("user logged in successfully!!");
});

app.get("/user/data", userAuth , (req, res) => {
        res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
        res.send("All data sent");
});

app.get("/admin/deleteUser", (req, res) => {
       res.send("Deleted a user");
});



app.listen(3000, () => {
    console.log("Server is running on this port..3000");
})

*/



/*

app.use("/users" , (req, res) => {
    res.send("Demo demo demo");
});

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

//Query Parameters and Dynamic Routes

app.get("user/:userId/:name/:password" ,(req,res) => {
    console.log(req.params);   //Read dynamic route
    console.log(req.query);  //Read data
    res.send({firstName: "Priya", lastName: "Reddy"});
} )

app.listen(3000 , () => {
    console.log("Server is successfully listening on port 3000");
}); 


//Multiple Route Handlers

app.get("/users" , 
    
(req, res ,next) => {
    console.log("Handling the route user");
    // res.send("Hnadling routes");
    next();     //next() passes control to the next middleware or route handler.
},

(req, res, next) => {
    console.log("Handling the route user 2!!");
    // res.send("2nd Route Handling");
    next();
},

(req, res, next) => {
    next();
    // res.send("3rd Route handling");
},

(req, res) => {
    console.log("Handling the route user 4!!");
    res.send("4th Route Handler");
});

*/