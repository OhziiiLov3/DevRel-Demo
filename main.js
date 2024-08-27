require('dotenv').config();
const { JigsawStack } = require('jigsawstack');

const apiKey = process.env.JIGSAWSTACK_API_KEY;

const jigsawstack = JigsawStack({
  apiKey 
});

async function scrapeWebsite() {
  const resp = await jigsawstack.web.ai_scrape({
    url: "https://www.nike.com/w/mens-dunk-shoes-90aohznik1zy7ok",
    element_prompts: ["prices", "discounted", "new"],
  });

  console.log(resp);
}

scrapeWebsite();
