const Discord = require("discord.js");
const TOKEN = "NjAyODUyMDUyMDM2NzQ3Mjg0.XTW5gg.TbGqnnp155k4QH0g7auHv28cAZI";
const PREFIX = "j!";
var bot = new Discord.Client();
const botStats = {};


bot.on("ready", function() {

  let statuses = ['Elizabeth V1.0 | Welcomer Bot!', 'welcoming others uwu']

   setInterval(function() {
    
    let status = statuses[Math.floor(Math.random()*statuses.length)]
    
    bot.user.setPresence({ game: {name: status }, status: 'online' });
  
  }, 5000)
  
})

bot.on("ready", function() {
    console.log("Ready!")
    
  
});

bot.on('guildMemberAdd', member => {
    let embed = new Discord.RichEmbed()
        .addField("Welcome! To our server 💖 ", member.user.tag)
        .addField("Has joined, hope u enjoy ur time here!", ":)")
        .setImage("https://s-media-cache-ak0.pinimg.com/originals/79/76/6e/79766e1f9af72b0f57771c62316ddc91.gif")
        .setFooter("Made by @𝐬𝐩𝐨𝐨𝐤𝐲 𝐡𝐞𝐚𝐯𝐞𝐧𝐥𝐞𝐬𝐬 🎃#5598 with Love! ")
        .setColor('#FFCCFF');
    let channel = member.guild.channels.find(channel => channel.id === '594428732283027458');
    return channel.send({embed: embed});

});

          
bot.login(TOKEN);