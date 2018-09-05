let spam = require("../spam-detection.js")
module.exports = (client, message) => {
  //ignore bots, shiro only serve hoomans
  if(message.author.bot) return

  //spamsadsfdasfasdfa
  spam.log(message)
  if(spam.tooQuick(3, 1000)){
   message.channel.send(client.embed(client,'', `${message.author}, slowdown`, '!', 0xd6453e))
  }
  if(spam.sameMessages(4)){
    message.channel.send(client.embed(client,'', `${message.author} stop spamming`, '!', 0xd6453e))
  }

  //ignore message without prefix
  if(!message.content.startsWith(client.config.prefix)) return 

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  console.log(`command:[${command}] args:[${args}]`)
 
  const cmd = client.commands.get(command)
  if (!cmd) return
  //run it
  cmd.run(client, message, args)

}