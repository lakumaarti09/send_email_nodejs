const express = require('express');
let PORT = 5000;
const app = express();
const sendMail = require('./controllers/sendMail');

app.get("/",(req, res)=>{

    res.send("i am server");
});

app.get("/sendemail",sendMail);

const start = async () =>{

    try {
        
        app.listen(PORT, ()=>{

            console.log(`i am live port in : ${PORT}`);

        });
    } catch (error) {
        
    }

};
start();