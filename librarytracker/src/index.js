require('dotenv').config();
const express = require('express');
const path = require('path');
const userModel = require('./backend/model/user');
const bookModel = require('./backend/model/book');
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


app.get('/api/books', async (req, res) => {
    try {
        const books = await bookModel.find().sort({ createdAt: -1 }).lean();
        res.json({ success: true, data: books });
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ success: false, message: 'Error fetching books' });
    }
});


app.post('/api/books', async (req, res) => {
    try {
        const { title, author, year, genre, description } = req.body;
        if (!title || !author) {
            return res.status(400).json({ success: false, message: 'Title and author are required' });
        }
        const newBook = await bookModel.create({ title, author, year, genre, description });
        res.json({ success: true, data: newBook });
    } catch (err) {
        console.error('Error creating book:', err);
        res.status(500).json({ success: false, message: 'Error creating book' });
    }
});

app.delete('/api/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await bookModel.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ success: false, message: 'Book not found' });
        res.json({ success: true, message: 'Book deleted' });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ success: false, message: 'Error deleting book' });
    }
});


const port = 5000;
app.listen(port,()=>{
    console.log(`Express Server on ${port}`);
})
