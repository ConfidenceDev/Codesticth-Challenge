const path = require("path");
const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
const Orders = require("./src/db/Orders.json");
const Reviews = require("./src/db/Reviews.json");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Welcome to Codesticth Shop Server");
});

app.post("/orders", async (req, res) => {
  const content = { id: Orders.length + 1, ...req.body };
  Orders.push(content);

  write("./src/db/Orders.json", Orders)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.post("/reviews", async (req, res) => {
  Reviews.push(req.body);
  write("./src/db/Reviews.json", Reviews)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

async function write(path, content) {
  try {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(content), "utf8", (err) => {
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
