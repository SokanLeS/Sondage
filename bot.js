const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("ready", () => {
    console.log("Connexion en cours ...");
});
client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
client.user.setActivity(`La Nation Bot Giveway`);
});
client.on(`message`, message =>{
if(message.content.startsWith(prefix + "help")) {
            message.delete()
            const embed = new Discord.RichEmbed()
                .setColor(0x954D23)
                .setTitle(":scroll: Liste des commandes ::scroll: ")
                .addField("&user","vous permet de voir les commandes utilisateurs")
                .addField("&modo","Vous permet de voir les commandes de moderation")
                .addField("&admin","Vous permet de voir les commandes des modérateur du bot")
                .setFooter("OverBot crée par ⏳Gaétan#2852");
                message.channel.send({embed})
        }
if(message.content.startsWith(prefix + `user`)) {
                    const embed = new Discord.RichEmbed()
                .setColor(0x954D23)
                .setDescription(":100:**Commandes pour les Utilisateurs**:100:")
                .addField("&poll","Vous permet de faire un sondage")
        .addField("&vote","Vous permet d'avoir le lien pour voter pour le bot sur Discord bot list")
                .addField("&help", "Affiche les commandes")
        .addField("&Delnotif","Uniquement sur le serveur de support, vous permet de ne plus avoir le rôle de notification")
                .addField("&invite", "Donne le lien pour me faire joindre votre serveur")
                .addField("&infoserv","Commande qui vous donne les informations du serveur sur le quelle la commande est exécuter ")
        .addField("&Notif","Uniquement sur le serveur de support, vous permet de prendre le rôle de notification")
                .addField("&report","Permet de report une personne (il faut un salon spécial nommer #reports")
        .addField("&support","Vous donne l'invitation pour rejoindre le serveur de OverBot")
        .setFooter("OverBot crée par ⏳Gaétan#2852");
                message.channel.send({embed})
                }
                if(message.content.startsWith(prefix + `modo`)) {
                message.delete()    
                const embed = new Discord.RichEmbed()
                .setColor(0x954D23)
                .setDescription(":hammer_pick: Les commandes de Modération :hammer_pick: :")
                .addField("&say", "Faire parler le bot")
                .addField("&mute [Mention]", "Permer d'interdire à un membre de parler")
        .addField("&embed","Vous permet de faire parler le bot en Embed")
                .addField("&unmute[Mention]", "Retire l'interdiction de parler")
                .addField("&kick [Mention]","Exclure un membre du serveur");
                message.channel.send({embed})
                }
 if(message.content.startsWith(prefix + `admin`)) {
                message.delete()    
                const embed= new Discord.RichEmbed()
                .setColor(0x954D23)
                 .setDescription(":oncoming_police_car:  Les commandes des modérateurs du bot :oncoming_police_car:  :")
                 .addField("&quit","Commande qui fait partir le bot du serveur d'ou l& commande est exécuter en cas de soucis réservé au modérateur du bot")
                 .addField("&patch","Permet de voir les patch ou le mise à jours du bot réservé au modérateur du bot")          
                 .setFooter("OverBot crée par ⏳Gaétan#2852");
                 message.channel.send({embed})
     }
});            
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN)
