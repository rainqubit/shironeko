module.exports = {
  messageLog: [],
  message: '',

  /**
   * @param message - Discord.js message object
   * @param maxLog - Maximum amount of recorded messages log
   */
  log: function(message, maxLog){
    this.message = message
    this.messageLog.push({
      author: message.author.id,
      content: message.content,
      timeStamp: Date.now()
    })

    //cleaning up the log
    if (this.messageLog.length > maxLog) this.messageLog.shift()
  },

  /**
   * @param amount - Treshold of messages in interval
   * @param interval - The interval (in millisecond)
   */
  tooQuick: function(amount, interval){
    // getting the messages of last message' author from log
    let msg = this.messageLog.filter(log =>log.author == this.message.author.id)

    // ignore it if the logs are bellow treshold
    if(msg.length < amount) return false
    
    // space-time continum manipulation...
    let lastTimeStamp = msg[msg.length - amount].timeStamp
    let currentTimeStamp = msg[msg.length - 1].timeStamp
    let msgInterval = currentTimeStamp - lastTimeStamp

    if( msgInterval <= interval) return true
    return false
  },
  /**
   * @param amount - Max treshold of same messages
   */
  sameMessages: function(amount){
    // getting the messages of last message' author from log.. again
    let msg = this.messageLog.filter(log => log.author == this.message.author.id)
    let msgContent = msg.map(log => log.content).join(' ')
    // message that just sent
    let currentMsg = this.message.content
    // check if its same with other messages
    let occurance = (msgContent.match(new RegExp(currentMsg, "g")) || []).length
    
    if (occurance >= amount) return true
    return false
  }
}