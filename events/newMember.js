module.exports = (client, member) => {
  const channel = member.guild.channels.find(ch => ch.name === client.config.greetChannel)
  channel.send(client.embed(client, "Hi!", `Welcome ${member}`, '~', 0x3453d1))
}