const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    throw new Error('MONGO_URI is not defined in the .env file');
}

let db;

const connectDB = async () => {
    if (db) return db;
    try {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db("promptDataset");
        console.log("MongoDB connected successfully");
        return db;
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
};

const getDB = () => {
    if (!db) {
        throw new Error('Database not initialized. Call connectDB first.');
    }
    return db;
};

module.exports = { connectDB, getDB }; 