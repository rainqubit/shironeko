exports.run = (client, message, args) => {
  let msg = args.join(" ")
  message.channel.bulkDelete(1)
  message.channel.send(msg)
}