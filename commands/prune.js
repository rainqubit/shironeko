exports.run = (client, message, args) => {
  let modRole = message.guild.roles.find(role => role.name === client.config.modRole)
  if (message.member.roles.has(modRole.id)) {
    amount = !args[0] ? 1 : parseInt(args[0])
    message.channel.bulkDelete(amount + 1) // +1 so it also deletes the command call
  } else {
    message.channel.send(client.embed(client, `NYA!?', 'Sorry, Master won't allow you to do that ${message.author}`, 0xd6453e))
  }
}