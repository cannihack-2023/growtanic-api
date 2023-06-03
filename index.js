const express = require("express");
const app = express();
const port = 8080;
const { Client } = require("pg");

const client = new Client({
  user: "root",
  host: "localhost",
  database: "growtanics",
  password: "secret",
  port: 5432,
});

client.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/plants", async function (req, res) {
  const result = await client.query("SELECT * FROM plants");

  res.json({
    data: result.rows,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
