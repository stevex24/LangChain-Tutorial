/**
 * Example Output (first run):
 * A coder named Stan, quite astute,
 * Made games that were charming, to boot.
 * With loops and with sprites,
 * He worked through the nights,
 * And shipped code that was truly a loot!
 */

// Import LangChain and Gemini integration
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import * as dotenv from "dotenv";
dotenv.config();

// Initialize Gemini model (uses your GEMINI_API_KEY from .env)
const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.7,
});

console.log("Running unique Gemini example...");

// Unique Example: generate a haiku about programming
const messages = [
  new SystemMessage("You are a creative AI poet."),
  new HumanMessage("Write a limeriick about game programming."),
];

// Run the model
const response = await model.invoke(messages);

console.log("\n--- Gemini LLM Response ---");
console.log(response.content);
