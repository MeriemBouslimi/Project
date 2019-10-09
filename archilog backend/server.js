const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const config = require("config");
const cors = require ('cors');

const app = express();

//allow cross-origin requests

app.use(cors());

mongoose.connect(config.get("mongodburl"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(() => {
        console.log("mongodb connected ...");
    })
    .catch(err => console.log(err));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is running on port 4000")
}) 

