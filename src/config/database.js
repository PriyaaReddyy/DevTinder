const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://priyareddy1404_db_user:Kgb2aJnP04nktyKn@nodejs.rnxyv5b.mongodb.net/devTinder"
    );
};

module.exports = connectDB;

