module.exports = {
  name: "kick",
  description: "kick a user from server",
  usage: "h!kick <user>",
  run: async (client, message, args) => {

 if (message.member.permissions.has("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("No perms babee")
 }
 }
}
