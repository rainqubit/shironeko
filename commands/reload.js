exports.run = (client, message, args) => {

  client.handler.events.forEach(event => {
    if (event.commands.length > 0) {
      event.commands.forEach(command => {
        //delete from cache
        delete require.cache[require.resolve(`./${command.handler}`)];
        //delete from Enmap
        client.commands.delete(command.name)
        //assign it again
        let props = require(`./${command.handler}`)
        client.commands.set(command.name, props)
        console.log(`Reloading ${command.name} - ${command.handler}`)
      })
    }
  });

  console.log('Reload finished')
  message.reply('Reload finished nya~')
}