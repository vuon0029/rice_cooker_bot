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
      List commands :roll_of_paper: 

    **/github**
    My Github Repo :computer: 

    **/ping**
    Ping pong me! :ping_pong: 

    **/image <*name*>**
    Request an image from Google :frame_photo: 

    **/play <*song name*>**
    Play a song from Youtube :video_camera:

    **/stop**
    Stop the song from Youtube :video_camera:

    **/cook <*rice*/*brown rice*>**
    Set a timer for your rice :rice: :timer: 

    **/timer <*mm:ss*>**
    Set a personal timer :person_raising_hand: :timer: 
    `);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  },
};
