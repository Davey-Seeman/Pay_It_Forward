const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(`${process.env.DB_URI}`);

async function run(){
    await client.connect();
}
run();

const dbName = "ChoresSite";
const collectionName = "ChoresList";

const database = client.db(dbName);
const collection = database.collection(collectionName);

module.exports = collection