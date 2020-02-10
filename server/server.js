//source requires: express and body-parser
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));
// serve back static files
app.use(express.static('server/public'));

//spin up server
app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server