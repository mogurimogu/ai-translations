import ServicesConfig from "./ServicesConfig";

async function AITranslation(languaje, text) {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: ServicesConfig.openAIToken,
  });

  const openai = new OpenAIApi(configuration);

  const prompt = `
  You are going to receive a text in any language, which you will detect based on what has been written and translate it into the specified language later on.
  Text received: ${text}
  Translate to ${languaje}: `;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.5,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const data = response.data;

  return data.choices[0].text.replace("\n", "");
}

export default AITranslation;
