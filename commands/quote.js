exports.run = (client, message, args) => {
  message.channel.fetchMessage(args).then((msg , error) => {
    if(error){ 
      console.log(error)
      return
    }
    quoteEmbed = {embed :{
      author: {
        name : `${msg.author.username}#${msg.author.discriminator}`,
        icon_url: `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.jpg`
      },
      description: msg.content,
      timestamp: msg.createdTimestamp,
    }}
    console.log(quoteEmbed)
    console.log(msg)
    message.channel.send(quoteEmbed)
  }).catch((error) => {
    message.channel.send(client.embed(client, `Nyaa~?`, `What's "${error.name}:${error.message}" `, '??', 0x34d8cd))
    console.log(error)
  })
}