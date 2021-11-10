const express = require('express');
// uniquie ids, npm i uuid

const app = express();
// middleware to parse data as json
app.use(express.json())
//routes
app.use('/todos', require('./routes/todos'))

app.listen(3000, () => console.log('Listening port 3000'))

//80314e1f-e800-4c02-a535-4cc0f5692397