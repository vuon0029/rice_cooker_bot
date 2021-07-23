require("dotenv").config();

const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();

const prefix = "/";

const queue = new Map();

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
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const serverQueue = queue.get(message.guild.id);

    switch (`/${command}`) {
      case "/ping":
        client.commands.get("ping").execute(message);
        break;
      case "/github":
        client.commands.get("github").execute(message);
        break;

      // functionality from https://www.youtube.com/watch?v=q0lsD7U0JSI
      case "/play":
        client.commands.get("play").execute(message, args);
        break;
      case "/stop":
        client.commands.get("stop").execute(message);
        break;

      case "/help":
        client.commands.get("help").execute(message);
        break;

      // functionality from https://www.youtube.com/watch?v=GYUc46XPlEI&t=254s
      case "/image":
        client.commands.get("image").execute(message, args);
        break;
      default:
        message.channel.send(`Umm... :neutral_face: Try typing **/help**`);
    }
  }
});

client.login(process.env.TOKEN);
