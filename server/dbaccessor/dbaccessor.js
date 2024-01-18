const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://daveyseemanma:3OBYUzUj4POxFjaX@cluster0.vber7fq.mongodb.net/?retryWrites=true&w=majority";
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