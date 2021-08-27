module.exports = {
  name: "ping",
  description: "",
  usage: "h!ping",
  run: async (client, message, args) => {

message.reply({content: `⏱| **${client.ws.ping}ms** Latency!`, ephemeral: true})
}
}

