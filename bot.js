
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("message", message => {
  if (message.content.startsWith('!poll')) {
  const poll = message.content.substring(5);
      if (poll.lenght === 0) {
         message.reply("Vous n'avez pas mis de question");
      }
            message.delete(1);
  const pollembed = new Discord.RichEmbed()
  .setTitle("StrawPoll")
  .setColor("#5599ff")
  .setDescription(`${poll}`)
  .setFooter(`StrawPoll de ${message.author.username}`, `${message.author.avatarURL}`)
  message.channel.sendMessage(pollembed)
  .then(async function (message) {
    await message.react("✅")
    await message.react("❌")
    await message.react("🤷")
    });
  }
    message.delete(1); 
        message.reply("change de vocabulaire merci!"); }
    if (message.content.startsWith('!commandes')) {
        message.delete(1);
        message.reply(" voici la liste des commandes : ```!poll ``` ```!commandes```!clear (efface 10 messages)```"); }
if (message.content.startsWith('!commandes')) {
        message.delete(5);
        message.reply('Les messages on bien été effacer !'); }
       
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
