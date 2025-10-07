// Gemini complex reasoning example: planning an AlphaZero-like GGP project
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.4,
});

console.log("Running Gemini GGP planning example...");

const messages = [
  new SystemMessage("You are an expert in AI research and open source reinforcement learning frameworks."),
  new HumanMessage(
    "I would like to write an open source version of a GGP like AlphaZero that takes any game and outputs a strong player of the game without knowing the rules in advance. I would like to start with the game Yavalath as a test case. Please list the development steps and open source tools needed for this project. Format your answer as JSON with two fields: 'high_level_steps' and 'recommended_tools'."
  ),
];

const response = await model.invoke(messages);

console.log("\n--- Gemini Response ---");
console.log(response.content);

