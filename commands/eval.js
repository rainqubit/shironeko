exports.run = (client, message, args) => {
  try{
    let script = args.map(arg => arg.toString()).join(" ")
    let result = eval(script)
    console.log(`eval result : ${result}`)
    message.channel.send(result.toString())
  }catch(error) {
    console.log(error)
    message.channel.send(client.embed(client,"", "I got errors", "~ >.<", 0xd6453e))
  }
}