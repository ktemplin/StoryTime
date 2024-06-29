const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Set your OpenAI API key
const OPENAI_API_KEY = ''
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle story generation
app.post('/generate_story', async (req, res) => {
    try {
        // Get user input from the form
        const who = req.body.who;
        const where = req.body.where;

        // Construct a prompt for ChatGPT
        const prompt = `Once upon a time, there was ${who}, in ${where}. The story unfolds as follows:`;

        // Make an API call to ChatGPT
        const response = await axios.post(
            'https://api.openai.com/v1/engines/text-davinci-002/completions',
            {
                prompt: prompt,
                max_tokens: 300
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                }
            }
        );

        // Extract the generated story
        const story = response.data.choices[0].text.trim();

        res.send({ story });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
