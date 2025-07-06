const express = require("express");
const cors = require("cors");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");

const app = express();

// ✅ CORS configuration
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// ✅ Configure AWS
AWS.config.update({ region: "ap-south-1" });
const s3 = new AWS.S3();

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const key = `submissions/${Date.now()}_${name.replace(/\s+/g, "_")}.json`;

  const params = {
    Bucket: "myawsbucket-rx1",
    Key: key,
    Body: JSON.stringify({ name, email, message }),
    ContentType: "application/json"
  };

  try {
    await s3.putObject(params).promise();
    res.json({ message: "Submission successful!" });
  } catch (err) {
    console.error("S3 Upload Error:", err);
    res.status(500).json({ error: "Failed to submit" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));