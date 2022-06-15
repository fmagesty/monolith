import express from "express";
import axios from "axios";
// import * as cheerio from "cheerio";

const app = express();
const PORT = process.env.port || 3000;
// TODO: add multiple websites (have to check how cheerio web scrapes each one first)
const website = "https://thehackernews.com/";
try {
  axios(website).then((response) => {
    const html = response.data;
    console.log(html);
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
