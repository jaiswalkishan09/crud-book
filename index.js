import express from "express";
import compression from "compression";
import * as dotenv from "dotenv";
import {
  getBookDetails,
  addBook,
  getRouteDetails,
  getBookDetailsById,
  updateBookDetailsById,
  deleteBookDetailsById,
} from "./controller/book.js";

dotenv.config();

const app = express();
const port = process.env.port ? process.env.PORT : 3000;

app.use(express.json());
app.use(compression());

app.get("/", getRouteDetails);
app.post("/add", addBook);
app.get("/book", getBookDetails);
app.get("/bookbyid", getBookDetailsById);
app.put("/update", updateBookDetailsById);
app.delete("/delete", deleteBookDetailsById);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
