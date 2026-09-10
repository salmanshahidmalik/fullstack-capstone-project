const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function connectToDatabase() {
  await client.connect();
  return client.db("giftlink");
}

module.exports = { connectToDatabase, client };