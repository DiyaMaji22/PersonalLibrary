require('dotenv').config();
const express = require('express');
const path = require('path');
const userModel = require('./backend/model/user');
const db = require('./backend/db/db');
const app = express();


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


app.post('/submit', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log('Received form data:', { name, email });
        
        
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            console.log("User already exists");
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email!'
            });
        }
        
        
        const newuser = await userModel.create({
            username: name, 
            email: email,
            password: password,
        });
        
        console.log('User created successfully:', newuser._id);
        
        
        res.json({
            success: true,
            message: 'User successfully registered!',
            redirectUrl: '/'
        });
    } catch (error) {
        console.error('Registration error:', error);
        
        let errorMessage = 'Error registering user. Please try again.';
        
        
        
        res.status(500).json({
            success: false,
            message: errorMessage
        });
    }
});


const port = 5000;
app.listen(port,()=>{
    console.log(`Express Server on ${port}`);
})
