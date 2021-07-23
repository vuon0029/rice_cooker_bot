const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "List of stuff I know",
  execute(message, args) {
    const embed = new Discord.MessageEmbed() // Set the main content of the embed
      // Set the title of the field
      .setImage("https://i.imgur.com/M5DKYKp.png")
      .setTitle("Rice Cooker Bot Command List")
      // Set the color of the embed
      .setColor("#FF69B4").setDescription(`
      **/help**
      List commands

    **/github**
    My Github Repo

    **/ping**
    Ping pong me!

    **/image <name>**
    Request an image from Google

    **/play <song name>**
    Play a song from Youtube

    **/stop**
    Stop the song from Youtube
    `);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  },
};
