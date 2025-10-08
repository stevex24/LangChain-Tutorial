import 'dotenv/config';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const modelName = "gemini-2.0-flash";  // or whatever one worked earlier
const model = new ChatGoogleGenerativeAI({
  model: modelName,
  temperature: 0.7,
});

console.log("Running iterative limerick refinement...\n");

const firstPrompt = "Write a limerick about game programming.";
let refinedText;
try {
  const firstResponse = await model.invoke(firstPrompt);
  refinedText = firstResponse.content;  // or response.content[0].text depending on format
  console.log("First Limerick:\n", refinedText, "\n");
} catch (err) {
  console.error("Error on first invocation:", err);
  process.exit(1);
}

let iteration = 1;
const maxIterations = 5;

while (iteration <= maxIterations) {
  console.log(`Iteration ${iteration}: refining final line...`);

  const prompt = `Here is a limerick:\n${refinedText}\nPlease adjust ONLY the final line so it has exactly 8 syllables, keeping rhyme and meaning. Return just the poem.`;

  try {
    const response = await model.invoke(prompt);
    const newText = response.content.trim();

    if (newText === refinedText) {
      console.log("No further change detected — stopping refinement.\n");
      break;
    }

    refinedText = newText;
  } catch (err) {
    console.error(`Error invoking model at iteration ${iteration}:`, err);
    break;
  }

  iteration++;
}

console.log("\nFinal Revised Limerick:\n", refinedText);

