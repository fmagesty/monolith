import express from "express";
const app = express();
const port = 3000;

const apiRequester = async () => {
  app.get("/", (req, res) => {
    res.send("This is some request sent by express\n");
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

apiRequester();
