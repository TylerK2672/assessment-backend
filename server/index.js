const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const SERVER_PORT = 4000;
const quoteURL = '/api/quote';

const { getCompliment, getFortune, getQuote, addQuote, deleteQuote } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get(quoteURL, getQuote);
app.post(quoteURL, addQuote);
// app.get(`${quoteURL}/:id`, editQuote);
app.delete(`${quoteURL}/:id`, deleteQuote);

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));