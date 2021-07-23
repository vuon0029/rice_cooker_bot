module.exports = {
  name: "stop",
  description: "stop the bot and leave the channel",
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
      return message.channel.send("You need to be in VC to stop the beat yo!");
    await voiceChannel.leave();
    await message.channel.send("Leaving channel :cook:");
  },
};
