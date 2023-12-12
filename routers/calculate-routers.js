const express = require("express");
const {
  calculateController,
  createPdfController,
  getPdfController,
} = require("../controllers/calculate-num-controller");
const router = express.Router();
// add
router.post("/add", calculateController);
// create pdf
router.post("/create-pdf", createPdfController);
// get pdf
router.get("/fetch-pdf", getPdfController);
module.exports = router;
