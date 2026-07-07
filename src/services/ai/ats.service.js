const PDFParseService = require("../PDFParse/pdfParser.service");
const client = require("./../../config/groq");
const generateATSPrompt = require("./../../prompts/ats.prompt");
const atsService = async (path, jobDes) => {
  const resumeText = await PDFParseService(path);
  const chatCompletion = await client.chat.completions.create({
    messages: [
      { role: "user", content: generateATSPrompt(resumeText, jobDes) },
    ],
    model: "openai/gpt-oss-20b",
  });
  return chatCompletion.choices[0].message;
};

module.exports = atsService;
