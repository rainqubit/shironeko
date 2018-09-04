exports.run = (client, message, args) => {
  message.channel.send(client.embed(client, '', 'Pong!', "~", 0xffffff))
}