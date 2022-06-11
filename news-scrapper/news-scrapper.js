import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.port || 3000;
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
