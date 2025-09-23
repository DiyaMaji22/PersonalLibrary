require('dotenv').config();
const express = require('express');
const path = require('path');
const userModel = require('./backend/model/user');
const db = require('./backend/db/db');
const app = express();

// Connect to database
db();

app.set("view engine", "html");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname,"..")));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'index.html'));
})
app.get("/signin",(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'src','signin','signin.html'));
})


app.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log('Received form data:', { name, email });
        
        const newuser = await userModel.create({
            username: name,  
            email: email,
            password: password,
        });
        
        console.log('User created successfully:', newuser._id);
        res.send("User registered successfully!");
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).send("Error registering user: " + error.message);
    }
});


const port = 5000;
app.listen(port,()=>{
    console.log(`Express Server on ${port}`);
})
