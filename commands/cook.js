const Discord = require("discord.js");

module.exports = {
  name: "cook",
  description: "Set a timer to cook Rice or Brown Rice!",
  async execute(message, args) {
    const type = args.join(" ");

    if (type === "rice" || type === "brown rice") {
      const time = type === "rice" ? "15:00" : "45:00";
      const image =
        type === "rice"
          ? "https://i.imgur.com/hXMYPxA.png"
          : "https://i.imgur.com/3f5TX4s.png";
      const embed = new Discord.MessageEmbed()
        .setImage(image)
        .setTitle(`${type.charAt(0).toUpperCase() + type.slice(1)} Timer`)
        .setColor("#FF69B4").setDescription(`:eye: :lips: :eye: 
        Hi <@${message.author.id}>, I'm cooking your ${type} now. :rice:
        It should be ready in **${time}** :cook:
        
        **Once it's done I'll give you a message! :kissing_closed_eyes:**`);
      let timeMsg = await message.channel.send(embed);

      let updatetimeMsg;

      const timeoutMinutes = type === "rice" ? 60 * 15 : 60 * 45;

      function startTimer(duration) {
        var timer = duration,
          minutes,
          seconds;

        updatetimeMsg = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          const embed = new Discord.MessageEmbed()
            .setImage(image)
            .setTitle(`${type.charAt(0).toUpperCase() + type.slice(1)} Timer`)
            .setColor("#FF69B4").setDescription(`:eye: :lips: :eye: 
        Hi <@${message.author.id}>, I'm cooking your ${type} now. :rice:
        It should be ready in **${minutes}:${seconds}** :cook:
        
        **Once it's done I'll give you a message! :kissing_closed_eyes:**`);
          timeMsg.edit(embed);

          if (--timer < 0) {
            timer = duration;
            console.log(timer);
          }
        }, 1000);
      }

      startTimer(timeoutMinutes);

      setTimeout(function () {
        clearInterval(updatetimeMsg);
        console.log("Cleared cooking interval");
        const embed = new Discord.MessageEmbed()
          .setImage(image)
          .setTitle(`${type.charAt(0).toUpperCase() + type.slice(1)} Timer`)
          .setColor("#FF69B4").setDescription(`:eye: :lips: :eye: 
        Hi <@${message.author.id}>, Your ${type} is done!. :rice:
`);
        timeMsg.edit(embed);
        message.author.send(`Tick tok!! Your ${type} is ready! :cook:
https://www.youtube.com/watch?v=CMN0jAENzIg`);
      }, timeoutMinutes * 1000);
    } else {
      return message.channel.send(
        "Umm... I can only cook *rice* or *brown rice* :cry:"
      );
    }
  },
};
