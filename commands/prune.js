exports.run = (client, message, args) => {
  let isNum = /^\d+$/.test(args[0])
  if (!isNum){
    message.channel.send(client.embed(client, `Nyaa~?`, `What do you mean`, '?', 0x34d8cd))
    return
  }

  let modRole = ''
  
  for(modRole of client.config.modRoles){ 
    modRole = message.guild.roles.find(role => role.name === modRole)
    if(message.member.roles.has(modRole)) break
  }

  if (!modRole){ // role not found{
    message.channel.send(client.embed(client, `Nyaa~?`, `Do you allowed to do that`, '?', 0x34d8cd))
    console.log(`Mod Role not found`)
    return
  }

  const maxPruneChats = 25
  if (message.member.roles.has(modRole.id)) {
    amount = !args[0] ? 1 : parseInt(args[0])
    if (amount >= maxPruneChats) {
      message.channel.send(client.embed(client, `NYA!?`, `Thats too much`, '!', 0xd6453e))
      return
    }
    message.channel.bulkDelete(amount + 1) // +1 so it also deletes the command call
  } else {
    message.channel.send(client.embed(client, `NYA!?`, `Sorry, Master won't allow you to do that ${message.author}`, '!', 0xd6453e))
  }
}