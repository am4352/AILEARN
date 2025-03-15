import { Mistral } from '@mistralai/mistralai';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.MISTRAL_API_KEY;
if (!apiKey) {
  throw new Error("MISTRAL_API_KEY is not set in the environment variables.");
}

const client = new Mistral({ apiKey });

export default async function getChatResponse(req, res) {
  try {
    console.log("API Request Starting...");
    
    const { message } = req.body;
   
    if (!message || typeof message !== 'string') {
      console.error("Invalid input type:", message);
      return res.status(400).json({ error: 'Invalid input type. Message should be a string.' });
    }

    console.log("Message received:", message);

    // Send message to Mistral AI
    const chatResponse = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [{ role: 'user', content: message }],
     
    });

    if (chatResponse.choices && chatResponse.choices.length > 0) {
      const responseContent = chatResponse.choices[0].message.content;
      res.json({ response: responseContent });
      console.log("Response from API:", responseContent);
    } else {
      res.status(500).json({ error: 'No response from the API' });
    }
  } catch (error) {
    console.error("Error in API Call:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

console.log("Server is ready to handle requests.");
