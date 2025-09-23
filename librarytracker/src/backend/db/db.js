const mongoose = require("mongoose");

const db = async () => {
    try {
        console.log('Trying to connect to mongodb');
        console.log('MongoDB URL:', process.env.MONGO_URL ? 'URL is set' : 'URL is not set');
        
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database is connected successfully!");
    } catch (error) {
        console.log("Database connection error:", error.message);
        console.log('Full error:', error);
    }
};

module.exports = db;
