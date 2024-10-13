const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {'Private-Key': '1a72d862-7448-4eeb-920c-8633a2c8ed89'}}
    )
    return res.status(r.status).json(r.data)
  } catch(e) {
    // return res.status(e.response.status).json(e.response.data)
    if (e.response) {
        // If response exists, return the status and data from the response
        return res.status(e.response.status).json(e.response.data);
      } else {
        // Handle cases where no response is returned from the API
        return res.status(500).json({ message: 'An error occurred', error: e.message });
      }
  }
//   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);