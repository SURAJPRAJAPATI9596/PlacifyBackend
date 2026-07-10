const codeRunPrompt = require("../../prompts/codingRun.prompt");
const client = require("../../config/groq");

const codingRunService = async (data) => {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: "user", content: await codeRunPrompt(data) }],
    model: "openai/gpt-oss-20b",
  });
  return chatCompletion.choices[0].message.content;
};

module.exports = codingRunService;
