var fs = require("fs")
var path = require("path")

exports.run = (client, message, args) => {
	fs.readFile(path.join(__dirname, "../handler.json"), (error, data) => {
		if (error) {
			console.log(error)
			message.reply("Sorry master, I got an error!")
		} else {
			try {
				var parsedData = JSON.parse(data)
				var commands = parsedData.events[0].commands.map(command => {
					return {name: command.name, value:command.description}
				})
        message.channel.send(client.embed(client, 'Command List', 'Here it is', 0x27e57f, commands))
			} catch (error) {
				console.log(error)
				message.reply("Sorry master, I got an error!")
			}
		}
	})
}