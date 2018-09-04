exports.run = (client, message, args) => {
  try{
    let result = eval(args.join())
    console.log(`eval result : ${result}`)
    message.channel.send(result.toString())
  }catch(error) {
    console.log(error)
    message.channel.send(client.embed(client,"", "I got error", "~ >.<", 0xd6453e))
  }
}