
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
  
  // async function getValuesForField(fieldName, callback) {
  //   try {
  //     const client = await MongoClient.connect(url);
  //     const db = client.db(dbName);
  
  //     const collection = db.collection('products');
  //     const countArray = [0, 0, 0,0,0]; // Initialize the count array
  
  //     // Count documents based on value ranges
  //     countArray[0] = await collection.countDocuments({ [fieldName]: { $gt: 90, $lt: 101 } });
  //     countArray[1] = await collection.countDocuments({ [fieldName]: { $gt: 81, $lt: 91 } });
  //     countArray[2] = await collection.countDocuments({ [fieldName]: { $gte: 71, $lt: 80 } });
  //     countArray[3] = await collection.countDocuments({ [fieldName]: { $gte: 61, $lt: 70 } });
  //     countArray[4] = await collection.countDocuments({ [fieldName]: { $gte: 1, $lt: 60 } });
  
  
  //     client.close();
  //     callback(countArray);
  //   } catch (error) {
  //     console.error(`Error occurred while retrieving ${fieldName} counts:`, error);
  //     callback([]);
  //   }
  // }
  
  // // Example usage:

  // getValuesForField('Math', countArray => {
  //   console.log('Count array for Hindi values:', countArray);
  //   // Perform further actions with the count array
  // });
   
  
  
// module.exports = getValuesForField;
module.exports = fetchDataFromDatabase;
module.exports = connectDB;



