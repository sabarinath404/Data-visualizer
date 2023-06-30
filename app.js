

// ////////////////////////

// const express = require('express');
// const app = express();
// const port = 3000;
//  // Path to your database.js file
//  let alert = require('alert'); 
//  app.set('views', __dirname + '/views'); 
//  app.set('view engine', 'ejs'); // Set EJS as the default view engine
// const  connectDB= require('./config/database'); 

// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// app.use(express.json()); // Parse JSON bodies// Set EJS as the default template engine

// app.use(express.static('public'));
// app.use('/js', express.static(__dirname + '/js'));
// // const { getValuesForField } = require('./path/to/acqua');
// // const fetchChartData = require('./chart-data');


// async function getValuesForField(fieldName, callback) {
//   try {
//     const db = await connectDB();

//     const collection = db.collection('products');
//     const countArray = [0, 0, 0,0,0]; // Initialize the count array

//     // Count documents based on value ranges
//     countArray[0] = await collection.countDocuments({ [fieldName]: { $gt: 90, $lt: 101 } });
//     countArray[1] = await collection.countDocuments({ [fieldName]: { $gt: 81, $lt: 91 } });
//     countArray[2] = await collection.countDocuments({ [fieldName]: { $gte: 71, $lt: 80 } });
//     countArray[3] = await collection.countDocuments({ [fieldName]: { $gte: 61, $lt: 70 } });
//     countArray[4] = await collection.countDocuments({ [fieldName]: { $gte: 1, $lt: 60 } });


//     // client.close();
//     callback(countArray);
//   } catch (error) {
//     console.error(`Error occurred while retrieving ${fieldName} counts:`, error);
//     callback([]);
//   }
// }

// // Example usage:

// getValuesForField('Hindi', countArray => {
//   console.log('Count array for Hindi values:', countArray);
//   // Perform further actions with the count array
// });

// app.get('/', async (req, res) => {




  
  
//   // Example usage:

  



//   try {
//     const db = await connectDB();
//     const data = await db.collection('products').find().toArray();

//     if (Array.isArray(data)) {
//       res.render('Dash', { data });
//     } else {
//       throw new Error('Data retrieved from the database is not an array');
//     }
//   } catch (error) {
//     console.error('Error retrieving data:', error);
//     res.status(500).send('Error retrieving data from the database');
//   }
// });






// app.get('/enter-data', (req, res) => {
//   res.render('enter-data', { alert: null, message: null, studentData: null });
// });

// app.post('/enter-data', async (req, res) => {
//   try {
//     const { _id, attendance, Math, social, English, Biology, science } = req.body;

//     const db = await connectDB();

//     const existingDocument = await db.collection('products').findOne({ _id: parseInt(_id) });

//     if (existingDocument) {
//       const result = await db.collection('products').updateOne(
//         { _id: parseInt(_id) },
//         {
//           $set: {
//             attendance: parseFloat(attendance),
//             Math: parseFloat(Math),
//             social: parseFloat(social),
//             English: parseFloat(English),
//             Hindi: parseFloat(English),
//             Biology: parseFloat(Biology),
//             science: parseFloat(science)
//           }
//         }
//       );

//       console.log('Updated document:', result);
//       res.render('enter-data', { message: 'Document--- updated', alert: null, studentData: null });
//     } else {
//       const result = await db.collection('products').insertOne({
//         _id: parseInt(_id),
//         attendance: parseFloat(attendance),
//         Math: parseFloat(Math),
//         social: parseFloat(social),
//         English: parseFloat(English),
//         Hindi: parseFloat(English),
//         Biology: parseFloat(Biology),
//         science: parseFloat(science)
//       });

//       console.log('Inserted document:', result);
//       res.render('enter-data', { alert: null, message: 'Document inserted successfully', studentData: null });
//     }
//   } catch (error) {
//     console.error('Error inserting/updating document:', error);
//     res.status(500).send('Error inserting/updating document in the database');
//   }
// });


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });




///////--------------------------------------------------------



const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
const connectDB = require('./config/database');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/js'));

async function getValuesForFields(subjects, callback) {
  try {
    const db = await connectDB();

    const collection = db.collection('products');
    const counts = {};

    for (const subject of subjects) {
      const countArray = [0, 0, 0,0,0,0,0,0]; // Initialize the count array

      // Count documents based on value ranges for the current subject
      countArray[0] = await collection.countDocuments({ [subject]: { $gt: 89, $lt: 101 } });
      countArray[1] = await collection.countDocuments({ [subject]: { $gt: 79, $lt: 91 } });
      countArray[2] = await collection.countDocuments({ [subject]: { $gte: 69, $lt: 81 } });
      countArray[3] = await collection.countDocuments({ [subject]: { $gt: 59, $lt: 71 } });
      countArray[4] = await collection.countDocuments({ [subject]: { $gte: 49, $lt: 61 } });
      countArray[5] = await collection.countDocuments({ [subject]: { $gte: 39, $lt: 51 } });
      countArray[6] = await collection.countDocuments({ [subject]: { $gte: 29, $lt: 41 } });
      countArray[7] = await collection.countDocuments({ [subject]: { $gte: 0, $lt: 31 } });

      counts[subject] = countArray;
    }

    // client.close();
    callback(counts);
  } catch (error) {
    console.error('Error occurred while retrieving counts:', error);
    callback({});
  }
}

app.get('/', async (req, res) => {
  try {
    const db = await connectDB();
    const data = await db.collection('products').find().toArray();


    const attendanceData = data.map(item => ({
      _id: item._id,
      attendance: item.attendance
    }));
    console.log('attendanceData:', attendanceData);

    const subjects = ['Hindi', 'Math', 'English', 'science', 'social', 'Biology'];
    getValuesForFields(subjects, counts => {
      console.log('Counts for subjects:', counts);
      res.render('dash.ejs', { data, counts, attendanceData });
      // Perform further actions with the counts object
    });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Error retrieving data from the database');
  }
});

app.get('/enter-data', (req, res) => {
  res.render('enter-data', { alert: null, message: null, studentData: null });
});

app.post('/enter-data', async (req, res) => {
  try {
    const { _id, attendance, Math, social, English, Biology, science } = req.body;

    const db = await connectDB();

    const existingDocument = await db.collection('products').findOne({ _id: parseInt(_id) });

    if (existingDocument) {
      const result = await db.collection('products').updateOne(
        { _id: parseInt(_id) },
        {
          $set: {
            attendance: parseFloat(attendance),
            Math: parseFloat(Math),
            social: parseFloat(social),
            English: parseFloat(English),
            Hindi: parseFloat(English),
            Biology: parseFloat(Biology),
            science: parseFloat(science)
          }
        }
      );

      console.log('Updated document:', result);
      res.render('enter-data', { message: 'Document updated', alert: null, studentData: null });
    } else {
      const result = await db.collection('products').insertOne({
        _id: parseInt(_id),
        attendance: parseFloat(attendance),
        Math: parseFloat(Math),
        social: parseFloat(social),
        English: parseFloat(English),
        Hindi:parseFloat(English),
                Biology: parseFloat(Biology),
                science: parseFloat(science)
              });
        
              console.log('Inserted document:', result);
              res.render('enter-data', { alert: null, message: 'Document inserted successfully', studentData: null });
            }
          } catch (error) {
            console.error('Error inserting/updating document:', error);
            res.status(500).send('Error inserting/updating document in the database');
          }
        });
        
        


        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`);
        });
        
        
