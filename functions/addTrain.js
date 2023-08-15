// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;

// Define our connection string. Info on where to get this will be described below. In a real world application you'd want to get this string from a key vault like AWS Key Management, but for brevity, we'll hardcode it in our serverless function here.
const MONGODB_URI =
  "mongodb+srv://admin:james@cluster0.ujzjm.mongodb.net/?retryWrites=true&w=majority";

// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(MONGODB_URI);

  // Specify which database we want to use
  const db = await client.db("todoapp");

  cachedDb = db;
  return db;
}

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log(event.body)
  // Get an instance of our database
  const db = await connectToDatabase();
  var _data = JSON.parse(event.body)
  // Insert the event object, which is the test data we pass in
  const result = await db.collection("trains").insertOne(_data);
     
  const response = {
    statusCode: 200,
     headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
    body: JSON.stringify(result)
  };
  
  return response;
 
};