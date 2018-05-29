const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://ernest:dupadupa@ds139890.mlab.com:39890/bookshelf');
mongoose.connection.once('open', () => {
    console.log('connected to DataBase');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening on port 4000');
});
