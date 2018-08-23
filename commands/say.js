exports.run = (client, message, args) => {
  let msg = args.join()
  //¯\_(ツ)_/¯
  if(msg.indexOf("love") >= 0){
    msg = "No"    
  }
 message.channel.send(msg)
}