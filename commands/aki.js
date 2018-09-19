exports.run = (client, messages, args) => {
  let region = "en.akinator.com"
  let guessData = {}
  client.aki.start(region, (guessData, error) => {
    if(error){
      console.log(error)
      return
    }
    messages.channel.send(client.embed(client, `${guessData.question.slice(0, -1)} ${client.config.suffix}?`, guessData.answers.join("/"), "<>"))
  })
}