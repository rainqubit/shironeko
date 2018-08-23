exports.run = (client, message, args)=> {
  message.channel.send({embed:{color: 808000, description: "pong"}}).catch(console.error)
}