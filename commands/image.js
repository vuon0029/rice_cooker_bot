var Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox"],
  },
});

module.exports = {
  name: "image",
  description: "Send back an image!",
  async execute(message, args) {
    try {
      const image_query = args.join(" ");
      if (!image_query) {
        return message.channel.send(
          "Image name not declared :( *sad rice cooker noises*"
        );
      } else {
        message.channel.send("*Cookin...*");
      }
      google
        .scrape(image_query, 1)
        .then((image_results) => {
          message.channel.send(`So I found **${image_query}**: `, {
            files: [image_results[0].url],
            split: true,
          });
        })
        .catch((err) => {
          message.channel.send(`Error: ${err}`);
          console.log("Error: ", err);
        });
    } catch (err) {
      message.channel.send(`My papa wrote shitty code... I'm ded
      ${err}`);
    }
  },
};
