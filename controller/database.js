import { MongoClient } from "mongodb";

export async function connectToDb() {
  const client = new MongoClient(process.env.MANGO_DB);
  await client.connect();
  return client;
}

// async function main() {
//   // Use connect method to connect to the server

//   console.log("Connected successfully to server");
//   const db = client.db(process.env.DB_NAME);
//   const collection = db.collection("book_details");

//   // the following code examples can be pasted here...

//   return "done.";
// }
