require('dotenv').config();
const express = require('express');
const cors = require('cors');

const attendeesController = require('./controllers/attendeesController');


// NEW EXPRESS INSTANCE
const app = express();


// MIDDLEWARE
app.use(cors());
// Parses incoming URL-encoded data:
app.use(express.urlencoded({ extended: false }));
// Parses incoming JSON-encoded data from req.body:
app.use(express.json());


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Nerd Out API!');
});

app.use('/api', attendeesController);


// SET PORT AND START SERVER

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Express server listening on port ${PORT}`);
// });

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")}`);
});
