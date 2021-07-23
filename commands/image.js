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

      google
        .scrape(image_query, 1)
        .then((image_results) => {
          message.channel.send(`So I found ${image_query}: `, {
            files: [image_results[0].url],
          });
          console.log(image_results[0].url);
        })
        .catch((err) => {
          message.channel.send(`Error: ${err}`);
        });
    } catch (err) {
      message.channel.send(`My papa wrote shitty code... I'm ded
      ${err}`);
    }
  },
};
