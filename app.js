const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const prefix = config.prefix

const badWords = require("./badWords.json")
client.on('ready', () =>{
    console.log('bot ready')
})

client.on('message', async msg =>{
    
    //ignore another bot and itself
    if (msg.author.bot) return

    //directly checking the message for offensive words

    for (const badWord of badWords.words) {
        if(msg.content.indexOf(badWord) >= 0){
            msg.channel.send('Tolong dijaga mulutnya')
            break
        }    
    }

    //ignore messages that doesn't contain the prefix
    if(msg.content.indexOf(prefix) !== 0) return
    const args = msg.content.trim().split(/ +/g)
    args.shift()
    let command = args.shift().toLowerCase()

    console.log(command)

    //ping command
    if(command === "ping"){
        msg.channel.send("pong")
    }

    //say command
    if(command === "say"){
        const sayMsg = args.join(" ")
        msg.channel.send(sayMsg)
    }

    //avatar command
    if(command.indexOf('ava') >= 0){
        msg.reply(msg.author.avatarURL)
    }

})

client.login(config.token)