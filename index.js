const Discord = require('discord.js');
const client = new Discord.Client();
const Token = "MzA2NDA4NDEyMTU2MTMzMzc4.DKbkaQ.92BwzXcwk6vAnSmCxWQHnTNHZM8";

client.on('ready',() => {
    console.log("Ready for action and stuff like that.")
    client.user.setGame("Strike | Still being coded so look for bugs. | In 2 servers.", "https://www.twitch.tv/discordapp")
})
