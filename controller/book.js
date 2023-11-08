import { connectToDb } from "./database.js";
import { ObjectId } from "mongodb";
import { checkValidInput } from "./common.js";

export const getRouteDetails = async (req, res) => {
  try {
    return res.status(200).json({
      result: {
        book: "Use /book route to list all the book details.",
        add: "Use /add route to insert a book record.",
        bookbyid:
          "Use /bookbyid route to fetch the book details of particular book.",
        update:
          "Use /update route to update the book details of particular book.",
        delete:
          "Use /delete route to delte the book details of particular book.",
      },
    });
  } catch (e) {
    console.log("Error in getAllBooks functon", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again" });
  }
};

export const addBook = async (req, res) => {
  const client = await connectToDb();
  try {
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("book_details");
    await collection.insertOne(req.body);
    const books_details = await collection.find({}).toArray();
    await client.close();
    return res.status(200).json({ result: books_details });
  } catch (e) {
    await client.close();
    console.log("Error in addBook functon", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again" });
  }
};

export const getBookDetails = async (req, res) => {
  const client = await connectToDb();
  try {
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection("book_details");
    const books_details = await collection.find({}).toArray();
    await client.close();
    return res.status(200).json({ result: books_details });
  } catch (e) {
    await client.close();
    console.log("Error in getBookDetails functon", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again" });
  }
};

export const getBookDetailsById = async (req, res) => {
  const client = await connectToDb();
  try {
    if (req.query.id && req.query.id.length > 0) {
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("book_details");
      const books_details = await collection
        .find({ _id: new ObjectId(req.query.id) })
        .toArray();
      await client.close();
      return res.status(200).json({ result: books_details });
    } else {
      await client.close();
      return res.status(400).json({ message: "Invalid Input" });
    }
  } catch (e) {
    await client.close();
    console.log("Error in getBookDetailsById functon", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again" });
  }
};

export const updateBookDetailsById = async (req, res) => {
  const client = await connectToDb();
  try {
    if (checkValidInput(req.body) && req.query.id && req.query.id.length > 0) {
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("book_details");
      await collection.updateOne(
        { _id: new ObjectId(req.query.id) },
        { $set: req.body }
      );
      const books_details = await collection.find({}).toArray();
      await client.close();
      return res.status(200).json({ result: books_details });
    } else {
      await client.close();
      return res.status(400).json({ message: "Invalid Input" });
    }
  } catch (e) {
    await client.close();
    console.log("Error in updateBookDetailsById functon", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again" });
  }
};

export const deleteBookDetailsById = async (req, res) => {
  const client = await connectToDb();
  try {
    if (req.query.id && req.query.id.length > 0) {
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("book_details");
      await collection.updateOne(
        { _id: new ObjectId(req.query.id) },
        { $set: req.body }
      );
      await collection.deleteOne({ _id: new ObjectId(req.query.id) });
      const books_details = await collection.find({}).toArray();
      await client.close();
      return res.status(200).json({ result: books_details });
    } else {
      await client.close();
      return res.status(400).json({ message: "Invalid Input" });
    }
  } catch (e) {
    await client.close();
    console.log("Error in deleteBookDetailsById functon", e);
    return res
      .status(500)
      .json({ message: "Something went wrong please try again" });
  }
};
