const pdf = require("html-pdf");
const path = require("path");
const pdfTemplate = require("../documents");
// calculate total number
const calculateController = async (req, res) => {
  console.log(req.body);
  const { num1, num2 } = req.body;
  try {
    const add = parseInt(num1) + parseInt(num2);
    return res.status(200).json({
      success: true,
      message: "number added successfull",
      add,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// create pdf controller
const createPdfController = async (req, res) => {
  const { num1, num2, result } = req.body;
  if (!num1 || !num2 || !result)
    return res.status(400).json({
      success: false,
      message: "Please provide all details...",
    });

  try {
    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
      }
      res.send(Promise.resolve());
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get pdf
const getPdfController = async (req, res) => {
  try {
    const pdfFilePath = path.join(__dirname, "..", "result.pdf");
    res.sendFile(pdfFilePath);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { calculateController, createPdfController, getPdfController };
