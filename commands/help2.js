exports.run = (client, message) => {
  let commands = []
  for(command of client.handler.events[0].commands){
    if(command.name !== "null"){
      commands.push({
        name:command.name,
        value:command.description
      })
    }
  }

  message.channel.send(client.embed(client, 'Command List', `if you want to call me say \`${client.config.prefix}\``, '~', 0x27e57f, commands))
}