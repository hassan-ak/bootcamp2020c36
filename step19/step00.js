// call faunadb in the app
const faunadb = require('faunadb'),
    // call query from faunadb
    q = faunadb.query;
// to use .env configration
require('dotenv').config();

// Async function as all the working with funadb is done in the asysnc manner
(async () => {
    // start the process if there is any key saved in the .env file
    if (process.env.FAUNADB_ADMIN_SECRET) {
        // new clien tdeclaration based on api key
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
        //create database
        try {
            var result = await client.query(
                q.CreateDatabase({ name: 'mytestdatabase' })
            );
            console.log(result);
        }
        catch (error) {
            if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
                console.log('Database with this name already exists');
            }
            else {
                console.log('Unknow Error: ');
                console.log(error);
            }
        }

    } else {
        console.log('No FAUNADB_ADMIN_SECRET in .env file, skipping DB setup');
    }

})();