const express = require('express');
const cors = require('cors');
const app = express();
const graphqlHTTP = require('express-graphql');
const {setupDB} = require('./config/databaseConnection');

const schema = require('./graphql/schema');

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
        pretty: true
    })
);

setupDB(v => console.log(v));

app.listen(4000);
console.log("Server listening on port 4000...");
