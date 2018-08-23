module.exports = (client, message) => {
  //i'm ready!! bring it on!!!
  client.guilds.forEach(guild => {
    console.log(`Started at ${guild.name} with ${guild.memberCount} members`)
  })
}