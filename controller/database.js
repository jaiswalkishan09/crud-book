import { MongoClient } from "mongodb";

export async function connectToDb() {
  const client = new MongoClient(process.env.MANGO_DB);
  await client.connect();
  return client;
}
