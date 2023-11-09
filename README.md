# crud-book

RESTful API using Node.js and MongoDB for managing books.

To Run this project int local:
i)cd crud-book
iii)Create a .env file and add the following values. Please don't forget to update the MONGODB variable with the appropriate URL of your own cluster, also update the DB_NAME, and BOOK_COLLECTION.

```
PORT: 3000
MANGO_DB: "mongodb+srv://<username>:<password>?@<clustername>.mghjrnd.mongodb.net/?retryWrites=true&w=majority"
DB_NAME: "book_demo"
BOOK_COLLECTION: "book_details"

```

ii)npm install
iii)npm start
iv) From postman you can test the following endponts.
Routes and their usage:
i) "/" : The home route will provide information about the available routes.
Request: localhost:3000
Response:

```
{
    "result": {
        "book": "Use /book route to list all the book details.",
        "add": "Use /add route to insert a book record.",
        "bookbyid": "Use /bookbyid route to fetch the book details of particular book.",
        "update": "Use /update route to update the book details of particular book.",
        "delete": "Use /delete route to delte the book details of particular book."
    }
}
```

iii) "/add": Use the "/add" route to insert a book record.
Request: localhost:3000/add
body:

```
   {
        "title": "test",
        "author": "kishan",
        "summary": "Give information about how to test your node app."
    }
```

Response: It will return the latest list of the books.

```
{
    "result": [
        {
            "_id": "654c3dca9506e5ab712de33c",
            "title": "test",
            "author": "kishan",
            "summary": "Give information about how to test your node app."
        }
    ]
}
```

ii) "/book": Use the "/book" route to list all book details.
Request: localhost:3000/book
Response:

```
{
    "result": [
        {
            "_id": "654c3dca9506e5ab712de33c",
            "title": "test",
            "author": "kishan",
            "summary": "Give information about how to test your node app."
        }
    ]
}
```

iv) "/bookbyid": Use the "/bookbyid" route to fetch the details of a particular book.
Request: localhost:3000/bookbyid
Query: id : 654c3dca9506e5ab712de33c
Response: Fetch the book details matching the above id.

```
{
    "result": [
        {
            "_id": "654c3dca9506e5ab712de33c",
            "title": "test",
            "author": "kishan",
            "summary": "Give information about how to test your node app."
        }
    ]
}
```

v) "/update": Use the "/update" route to update the details of a specific book.
Query: "id : 654c3dca9506e5ab712de33c"
Body:

```
    {
        "title": "After Local Test",
        "summary": "Give information about how to deploy your app."
    }
```

Response: With updated list.

```
{
    "result": [
        {
            "_id": "654c3dca9506e5ab712de33c",
            "title": "test",
            "author": "kishan",
            "summary": "Give information about how to test your node app."
        }
    ]
}
```

vi) "/delete": Use the "/delete" route to delete the details of a particular book.
Request: localhost:3000/delete?id=654bb5721c5101adb2e1ea76

Response: with updated list

```
{
    "result": []
}
```
