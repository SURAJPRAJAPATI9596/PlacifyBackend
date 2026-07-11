const codeSubmitPrompt = require("./../../prompts/codeSubmit.prompt");
const client = require("../../config/groq");

const codingSubmitService = async (data) => {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: "user", content: await codeSubmitPrompt(data) }],
    model: "openai/gpt-oss-20b",
  });
  return chatCompletion.choices[0].message.content;
};

module.exports = codingSubmitService;
