const express = require('express');
require('dotenv').config()
const port = process.env.PORT;
// uniquie ids, npm i uuid

const app = express();
// middleware to parse data as json
app.use(express.json())
//routes
app.use('/todos', require('./routes/todos'))

app.listen(port, () => console.log('server running', port))
