import { MistralClient } from '@mistralai/client';

const client = new MistralClient('YOUR_MISTRAL_API_KEY');

export const generateQuiz = async (req, res) => {
    const { topic } = req.body;

    const prompt = `
 Generate a quiz on the following topic: "${topic}".  
 - Create 5 multiple-choice questions (MCQs).  
 - Each question should have 4 options (A, B, C, D) with one correct answer.  
 - Keep the difficulty level moderate.  
 `;

    try {
        const response = await client.complete({
            model: 'mistral-medium',
            prompt,
            max_tokens: 500,
            temperature: 0.7,
        });

        const quiz = response.choices[0].text.trim();
        res.json({ quiz });
    } catch (error) {
        console.error('Error generating quiz:', error);
        res.status(500).json({ error: 'Failed to generate quiz' });
    }
};

















