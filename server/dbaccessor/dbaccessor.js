const { MongoClient } = require("mongodb");

const uri = process.env.DATABASE_URI;
console.log(uri)
const client = new MongoClient(uri);

async function run(){
    await client.connect();
}
run();

const dbName = "ChoresSite";
const collectionName = "ChoresList";

const database = client.db(dbName);
const collection = database.collection(collectionName);

module.exports = collection