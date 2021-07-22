const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");

const client = new Discord.Client();

const prefix = "/";

client.once("ready", () => {
  console.log("Rice Cooker cookin!");
});

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  } else {
    switch (message.content.toLowerCase()) {
      case "/ping":
        client.commands.get("ping").execute(message);
        break;
      case "/github":
        client.commands.get("github").execute(message);
        break;
      default:
        message.channel.send(`~~What the heck??~~ Try typing **/help**`);
    }
  }
});

client.login(process.env.TOKEN);
