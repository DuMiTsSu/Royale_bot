const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`🤖 Botul rulează ca ${client.user.tag}`);
  client.user.setActivity('royale v3/v4');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const command = message.content.toLowerCase().trim();

  // Ajutor
  if (command === 'royale') {
    return message.reply('👉 Folosește: `royale v3` sau `royale v4`');
  }

  // Varianta V3
  if (command === 'royale v3') {
    message.channel.send({ 
      files: ['https://i.imgur.com/I5BvANT.png'] 
    }).catch(console.error);
  }

  // Varianta V4
  if (command === 'royale v4') {
    message.channel.send({ 
      files: ['https://i.imgur.com/TgAoPsH.jpeg'] 
    }).catch(console.error);
  }
});

client.login(config.token);