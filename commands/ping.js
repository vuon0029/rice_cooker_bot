module.exports = {
  name: "ping",
  description: "Ping Pong me!",
  execute(message, args) {
    message.channel.send("pong!");
  },
};
