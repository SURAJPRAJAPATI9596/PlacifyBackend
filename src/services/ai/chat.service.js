const client = require("./../../config/groq");
const chatPrompt = require("./../../prompts/chat.prompt");
const chatService = async (chat) => {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: "user", content: chat + chatPrompt }],
    model: "openai/gpt-oss-20b",
  });
  return chatCompletion.choices[0].message;
};

module.exports = chatService;
