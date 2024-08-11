const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const connectDb = require('./config');
app.use(express.json()); 
app.use('/uploads', express.static('uploads')) //to access images in frontend
app.use(cors());  
connectDb().then(() => {  
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));                        
    app.listen(process.env.PORT, () => {
        console.log(`Server running on localhost ${process.env.PORT}`);
    });       
}).catch(error => { 
    console.error("Failed to connect to MongoDB:", error);
});     