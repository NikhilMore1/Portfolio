const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.URI;
const connectDB = async() =>{
    try{
        await mongoose.connect(uri,{
            serverSelectionTimeoutMS:30000,
            socketTimeoutMS:45000
        });
        console.log("Mongodb connected");
    }catch(error){
        console.error("Mongo db connection error",error);
        process.exit(1);
    }
}

module.exports = connectDB;