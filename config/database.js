
////////////////////////////////////////////////////////////////



const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'shopDB';

async function fetchDataFromDatabase() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    // Retrieve data from the database
    const collection = db.collection('products');
    const data = await collection.find().toArray();


    

    client.close();
    return data;
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error);
    throw error;
  }
}


async function connectDB() {
    try {
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      return db;
    } catch (error) {
      console.error('Error occurred while connecting to MongoDB:', error);
      throw error;
    }
  }
  
module.exports = fetchDataFromDatabase;
module.exports = connectDB;



