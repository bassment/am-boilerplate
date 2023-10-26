const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = async function (text) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: text,
    max_tokens: 1000,
    temperature: 0.7,
  });
  return completion.data.choices[0].text;
};
