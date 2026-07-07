const client = require("./../../config/groq");
const generateResumePrompt = require("./../../prompts/resume.prompt");
const resumeService = async (resume) => {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: "user", content: await generateResumePrompt(resume) }],
    model: "openai/gpt-oss-20b",
  });
  console.log(resume);
  return chatCompletion.choices[0].message;
};

module.exports = resumeService;
