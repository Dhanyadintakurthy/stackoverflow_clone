//requiring dependencies.
const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json())
app.use(cors());

const UserRouter = require('./Router/user.router');
const QuestionRouter = require('./Router/question.router');
app.use('/users', UserRouter);
app.use('/questions', QuestionRouter)

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))

const URI = process.env.MONGO_URL;
mongoose.connect(URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})