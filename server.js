const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/:amount", (req, res) => {
  const inputAmount = req.params.amount

  const coinValuesInCents = {
    "Silver Dollar": 100, 
    "Half Dollar": 50, 
    "Quarter": 25, 
    "Dime": 10, 
    "Nickel": 5, 
    "Penny": 1,
  }
  const coinsInCents = Object.values(coinValuesInCents);
  const coinNames = Object.keys(coinValuesInCents);

  // convert the dollar amount to cents
  let amountInCents = Math.round(inputAmount * 100);
  const result = {};

  for (let i = 0; i < coinsInCents.length; i++) {
    // get number of biggest value coin
    let countCount = Math.floor(amountInCents / coinsInCents[i])
    // then subtract that from the current amount for the next biggest coin value
    amountInCents -= countCount * coinsInCents[i]
    // update the result object with the coin name and nuber of of coins
    result[coinNames[i]] = countCount;
  }

  res.json(result);
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
