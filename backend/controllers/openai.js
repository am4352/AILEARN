import { Mistral } from '@mistralai/mistralai';
import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.MISTRAL_API_KEY;
if (!apiKey) {
  throw new Error("MISTRAL_API_KEY is not set in the environment variables.");
}

const client = new Mistral({ apiKey: apiKey });
console.log("API testing");

export default async function getChatResponse(req, res) {
  try {
    console.log("API Request Starting...");

    const chatResponse = await client.chat.complete({
      model: 'mistral-large-latest', // Ensure this model name is correct
      messages: [{ role: 'user', content: 'A marble block of mass 2 kg lying on ice when given a velocity of 6 m/s is stopped by friction in 10s. Then the coefficient of friction is (consider g =10m/s)' }],
    });

    if (chatResponse.choices && chatResponse.choices.length > 0) {
      res.json({ response: chatResponse.choices[0].message.content });
    } else {
      res.status(500).json({ error: 'No response from the API' });
    }
  } catch (error) {
    console.error("Error in API Call:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
console.log("hello")
















