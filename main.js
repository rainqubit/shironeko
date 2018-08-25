const Discord = require("discord.js")
const _ = require('lodash') // added lodash out of habbit.. welp ¯\_(ツ)_/¯
const Enmap = require('enmap')
require("dotenv").config()

//super secret shiro's three sizes
//ehem i mean token
const token = process.env.BOT_TOKEN
//command footler
let handler = require("./handler.json")
let client = new Discord.Client()
//configsssssss
client.config = require("./config.json")
client.handler = handler
client.embed = require("./embed.js")

client.commands = new Enmap()

//linking events and commands with handlers
//thanks dhillon for the concept
handler.events.forEach(event => {
  let eventFile = require(`./events/${event.eventHandler}`)

  //linking events
  client.on(event.name, eventFile.bind(null, client))
  console.log(`Linked ${event.name} event to ${event.eventHandler}`)

  if (event.commands.length > 0) {
    event.commands.forEach(command => {      
      //linking commands
      let props = require(`./commands/${command.handler}`)
      client.commands.set(command.name, props)
      console.log(`  Linked ${command.name} command to ${command.handler}`)
    })
  }
})

// if you forgot this line it'll gives you hours of frustration :insertSmirkEmojiHere:
client.login(token)

// for compatibility with zeit now deployment
// so it'll never freeze
// ...
// WAKANDA FOREVAH!!

//require('http').createServer().listen(3000)
