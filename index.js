const Discord = require("discord.js");

const Token = "MzA2NDA4NDEyMTU2MTMzMzc4.DKbkaQ.92BwzXcwk6vAnSmCxWQHnTNHZM8";
const Prefix = "!"

var bot = new Discord.Client();

bot.on("ready", function(){ 
    console.log("Ready for action and stuff like that.");
    bot.user.setGame("Strike | Still being coding so look for bugs");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(Prefix)) return;

    var args = message.content.substr(Prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
        var embed1 = new Discord.RichEmbed()
          .addField("About", "This bot is still in development. Not much to see here.")
          .addField("Developer", "I am being developed by Kenneth#9303.")
          .setColor(222, 215, 18)
        message.channel.sendEmbed(embed1);
        break;
        case "help":
        var embed2 = new Discord.RichEmbed()
         .addField("Commands", "!info")
         .setColor(222, 215, 18)
        message.channel.sendEmbed(embed2)
        break;        
    }
});


bot.login(Token);
