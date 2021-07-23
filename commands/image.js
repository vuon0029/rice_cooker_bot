var Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

module.exports = {
  name: "image",
  description: "Send back an image!",
  async execute(message, args) {
    message.channel.send("*Cookin...*");
    try {
      const image_query = args.join(" ");
      if (!image_query) {
        return message.channel.send(
          "Image name not declared :( *sad rice cooker noises*"
        );
      }
      const image_results = await google.scrape(image_query, 1);
      message.channel.send(image_results[0].url);
    } catch {
      message.channel.send(`My papa wrote shitty code... I'm ded`);
    }
  },
};
