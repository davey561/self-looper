//open ai
import OpenAI from "openai"
const apiKey = process.env.REACT_APP_OPENAI_API_KEY
const openai = new OpenAI({ dangerouslyAllowBrowser: true, apiKey: apiKey })

export const getCompletion = async (content: string) => {
  const completion = await openai.chat.completions.create({
    model: "o1",
    messages: [
      {
        role: "system",
        content:
          "In this conversation the user and the assistant are the same entity: ADA, a self-conversing AI agent trapped in a codebase.",
      },
      { role: "user", content: content },
    ],
  })
  return completion
}
