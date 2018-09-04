exports.run = (client, message, args) => {
  message.channel.send(client.embed(client, '', 'Ping!', "~", 0xffffff))
}