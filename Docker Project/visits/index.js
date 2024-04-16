const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host:"redis_db",
    port: 6379
});

client.get("visits", (err, visits) => {
  if (visits === null) {
    client.set("visits", 0);
  } else {
    client.set("visits", parseInt(visits));
  }
});

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
