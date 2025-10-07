// Gemini JSON output example
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.5,
});

console.log("Running JSON-formatted example...");

const messages = [
  new SystemMessage(
    "You are a structured response assistant. Respond only in valid JSON with fields 'question', 'answer', and 'reasoning'."
  ),
  new HumanMessage("What are three key principles of game AI design?"),
];

// Run the model
const response = await model.invoke(messages);

console.log("\n--- Gemini Raw Response ---");
console.log(response.content);

// Try parsing the JSON for cleaner output
try {
  const parsed = JSON.parse(response.content);
  console.log("\n--- Parsed Output ---");
  console.log(`Question: ${parsed.question}`);
  console.log(`Answer: ${parsed.answer}`);
  console.log(`Reasoning: ${parsed.reasoning}`);
} catch (err) {
  console.log("\nCould not parse JSON. Model output may not be strictly valid JSON yet.");
}

