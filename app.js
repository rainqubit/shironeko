const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")
const Enmap = require("enmap")

require("dotenv").config()
const token = process.env.DISCORD_TOKEN

const config = require("./config.json")
client.config = config

const badWords = require("./badWords.json")
client.on("ready", () => {
  console.log("bot ready")
})

  //loop event files
  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err)
    files.forEach(file => {
      //ignore file that are not js
      if (!file.endsWith(".js")) return

      const event = require(`./events/${file}`)

      // the event name itself without file extension (.js)
      let eventName = file.split(".")[0]

      client.on(eventName, event.bind(null, client))
      delete require.cache[require.resolve(`./events/${file}`)]
    })
  })

  client.commands = new Enmap()

  //loop command files
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err)

    files.forEach(file => {
      if (!file.endsWith(".js")) return

      let props = require(`./commands/${file}`)
      let commandName = file.split(".")[0]

      client.commands.set(commandName,props)
    })
  })

client.login(token);
