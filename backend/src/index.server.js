const express = require('express');
const env = require('dotenv');
const app = express();


env.config();

app.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Hello from the server'
    });
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});