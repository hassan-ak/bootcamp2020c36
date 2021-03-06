#!/usr/bin/env node
//https://docs.fauna.com/fauna/current/tutorials/crud#retrieve

/* 
Copy the ref number of the document created in step 4 or 5
*/

const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();


(async () =>{

  if (process.env.FAUNADB_mytestdatabase_SECRET) {
    //console.log("Faunadb Server Secret: " + process.env.FAUNADB_mytestdatabase_SECRET);

    var client = new faunadb.Client({ secret: process.env.FAUNADB_mytestdatabase_SECRET });
    
    //Retrive a document in the container of the database 
    try {
      var result = await client.query(
        q.Get(q.Ref(q.Collection('posts'), '288865409815282188'))
      );
      console.log("Document retrived from Container in Database: " + result.data.title);
    } 
    catch (error){
        console.log('Error: ');
        console.log(error);
    }

  } else {
    console.log('No FAUNADB_mytestdatabase_SECRET in .env file, skipping Document Retrival');
  }

})();