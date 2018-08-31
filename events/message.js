let spam = require("../spam-detection.js")
module.exports = (client, message) => {
  //ignore bots, shiro only serve hoomans
  if(message.author.bot) return

  //spamsadsfdasfasdfa
  spam.listen(message)
  if(spam.on(3, 1000)){
   message.channel.send(client.embed(client,'', `${message.author} chat too fast`))
  }

  //ignore message without prefix
  if(message.content.indexOf(client.config.prefix) < 0 ) return
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  console.log(`command:[${command}] args:[${args}]`)
 
  const cmd = client.commands.get(command)
  if (!cmd) return
  //run it
  cmd.run(client, message, args)

}