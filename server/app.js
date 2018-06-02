const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

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

app.listen(4000, () => {
  console.log('Now listening on port 4000');
});
