module.exports = (client, message) => {
  //ignore bots
  if(message.author.bot) return

  //ignore message without prefix
  if(message.content.indexOf(client.config.prefix) < 0 ) return

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  console.log(`args : ${args}`)
  console.log(`command : ${command}`)

  const cmd = client.commands.get(command)

  if (!cmd) return

  cmd.run(client, message, args)

}