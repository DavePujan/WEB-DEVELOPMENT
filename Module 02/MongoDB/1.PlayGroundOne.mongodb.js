// This is lec 94

/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmadatabase');

// Insert a few documents into the course collection.
db.getCollection('courses').insertMany([
    {
        "name": "python",
        "Price": "15000",
        "Instructor": "john"
      },
      {
        "name": "javascript",
        "Price": "18000",
        "Instructor": "mary"
      },
      {
        "name": "C++",
        "Price": "17000",
        "Instructor": "peter"
      },
      {
        "name": "ruby",
        "Price": "19000",
        "Instructor": "linda"
      }
]);


// Print a message to the output window.
console.log(`Done Inserting Data`);

