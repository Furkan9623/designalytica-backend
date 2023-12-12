const express = require("express");

const pdf = require("html-pdf");
const cors = require("cors");
const path = require("path");
const pdfTemplate = require("./documents");
const router = require("./routers/calculate-routers");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
