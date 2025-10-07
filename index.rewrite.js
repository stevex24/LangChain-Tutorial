// Gemini revision example: edit limerick for better rhythm
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.5,
});

console.log("Running Gemini limerick revision example...");

const originalLimerick = `
A coder named Stan, quite astute,
Made games that were charming, to boot.
With loops and with sprites,
He worked through the nights,
And shipped code that was truly a loot!
`;

const messages = [
  new SystemMessage("You are an editor who improves rhythm and meter in creative writing."),
  new HumanMessage(
    `Here is a limerick with nine syllables in the final line Please produce a version with only eight syllables in the final line, as required by the Limerick form.\n${originalLimerick}\nPlease rewrite it so the rhythm matches the traditional limerick meter, but keep the original meaning and tone.`
  ),
];

const response = await model.invoke(messages);

console.log("\n--- Gemini Revised Limerick ---");
console.log(response.content);

