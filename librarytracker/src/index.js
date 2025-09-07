import express from 'express';
import path from 'path';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../')));
app.use('/src', express.static(path.join(__dirname, '../src')));

const port = 5000;

app.use(express.static(path.join(__dirname,'public')))


app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname, "../index.html"));
    });


mongoose.connect('mongodb://localhost:27017/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Mongo is connected");
})
const schema = mongoose.Schema;

const dataschema = new schema({
   name: { type: String },
   email: { type: String },
   password: { type: String }
});

const Data = mongoose.model('Data', dataschema);

app.post('/submit', async (req,res) => {
    try {
        const {name, email, password} = req.body;
        const newData = new Data({
            name,
            email,
            password
        });
        await newData.save();
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
    res.send("You are signed in");
});


app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);

})
