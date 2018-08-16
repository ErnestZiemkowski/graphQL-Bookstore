const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mLab database
mongoose.connect('mongodb://ernest:dupadupa@ds139890.mlab.com:39890/bookshelf');
mongoose.connection.once('open', () => {
    console.log('connected to DataBase');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.set('views', path.join(__dirname, '../client/public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const port = process.env.PORT || 4000;

app.set('port', port);

app.listen(port, () => {
  console.log('Now listening on port ' + port);
});
