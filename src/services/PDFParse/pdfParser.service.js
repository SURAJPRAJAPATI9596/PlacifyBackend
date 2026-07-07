const { PDFParse } = require("pdf-parse");
const PDFParseService = async (pdf) => {
  const parser = new PDFParse({ url: pdf });
  const result = await parser.getText();
  return result.text;
};

module.exports = PDFParseService;
