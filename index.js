const express = require('express')
const app = express();

app.get("/", (req, res) => {
  res.send('HELLO GUYS THIS IS THE STUPIDEST WEBSITE OF HYDRA -_-')
})

app.listen(3000,() =>{
  console.log('HYDRA READY')
})

const prefix = 'h!';
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

['command'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;


  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) command.run(client, message, args);
  
});

client.on("messageCreate", message => {
  if (message.content === "Hydra") {
    return messageCreate.channel.send({content:`Hey Its my Name`});
  }
});
//---status
client.on("ready", () => {
  console.log(`mako ${client.user.username} is online`);
client.user.setPresence({ activities: [{ name: 'Hydra Kingdom' }], status: 'dnd', type: 'COMPETING' })
//---types:-
//--status
// dnd 
// online
// idle
// invisible

//---types
// PLAYING
// COMPETING (new)
// STREAMING
// WATCHING
// LISTENING
})

// dont forget to thank me <3
// heartless people will not thank ;-;
client.login(process.env.HYDRA)