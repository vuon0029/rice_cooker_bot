const Scraper = require("images-scraper");
const Discord = require("discord.js");

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
          "Image name not declared :cry: *sad rice cooker noises*"
        );
      } else {
        message.channel.send("*Cookin...*");
      }
      google
        .scrape(image_query, 1)
        .then((image_results) => {
          const embed = new Discord.MessageEmbed()
            .setImage(image_results[0].url)
            .setTitle(`A wild **${image_query}** appeared`)
            .setColor("#FF69B4")
            .setDescription(`*What a pretty looking ${image_query}...*`);
          message.channel.send(embed);
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
