//import the packages we just installed

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//enable usage of .env files -this must always be at the top most of your server/app/index.js file
require("dotnev").config();

// Create exprss app
const app = express();

//set up middlewares(code that runs for evry request)
app.use(cors());
app.use(express.json());

//our port
const PORT = process.env.PORT || 5000;

//create endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    status: ok,
    message: "Hello! this is the home endpoint of our backend",
    data: {
      name: "e-commerce-backend data",
      class: "Feb 2025",
      Efficiency: "Begginer",
    },
  });
});

//start server
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
