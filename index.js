const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Rice Cooker cookin!");
});

client.login(process.env.TOKEN);
