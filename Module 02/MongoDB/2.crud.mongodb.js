//this is lec 95
//CRUD operation
use('crudDatabase');

// // create collection
// db.createCollection('courses');

// db.courses.insertOne({
//     name: "harrys web development",
//     price: 0,
//     assignments: 12,
//     project: 45
//   });

// db.courses.insertMany([
//     {
//       name: "harrys python course",
//       price: 0,
//       assignments: 12,
//       project: 45
//     },
//     {
//       name: "harrys javascript course",
//       price: 0,
//       assignments: 12,
//       project: 45
//     },
//     {
//       name: "harrys c++ course",
//       price: 0,
//       assignments: 12,
//       project: 45
//     },
//     {
//       name: "harrys ruby course",
//       price: 0,
//       assignments: 12,
//       project: 45
//     },
//     {
//       name: "harrys react course",
//       price: 0,
//       assignments: 12,
//       project: 45
//     },
//     {
//       name: "harrys node course",
//       price: 0,
//       assignments: 12,
//       project: 45
//     }
//   ]);

// // Read operation
// let a = db.courses.find({price: 0});
// console.log(a.count());
// console.log(a.toArray());

// let b = db.courses.findOne({price: 0});
// console.log(b);

// // Update operation
// db.courses.updateOne({name: "harrys web development"}, {$set: {price: 2000}});
// db.courses.updateMany({price: 0}, {$set: {price: 1000}});

// // Delete operation
// db.courses.deleteMany({price: 1000});

Operator    Description:
$eq         Matches values that are equal to a specified value.
$gt         Matches values that are greater than a specified value.
$gte        Matches values that are greater than or equal to a specified value.
$in         Matches any of the values specified in an array.
$lt         Matches values that are less than a specified value.
$lte        Matches values that are less than or equal to a specified value.
$ne         Matches all values that are not equal to a specified value.
$nin        Matches none of the values specified in an array.

// $eq Example:
db.courses.find({price: {$eq: 0}});