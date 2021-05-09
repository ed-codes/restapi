require('dotenv').config(); 

const express = require('express');
const app = express();
const mongoose = require('mongoose'); 


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }); // senstitive info is kept in .env file
const db = mongoose.connection; 
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('Connected to database'))

app.use(express.json()); // middleware

const subscribersRouter = require('./routes/subscribers'); // set up a new router in that file
app.use('/subscribers', subscribersRouter); // anyone visiting /subscribers is sent to that router


app.listen(3000, () => console.log('Server started')); 



