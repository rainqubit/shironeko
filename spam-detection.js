module.exports = {
  messageLog: [],
  message: '',
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
  tooQuick: function(amount, interval){
    let msg = this.messageLog.filter(log =>log.author == this.message.author.id)

    if(msg.length < amount) return false
    
    let lastTimeStamp = msg[msg.length - amount].timeStamp
    let currentTimeStamp = msg[msg.length - 1].timeStamp
    let msgInterval = currentTimeStamp - lastTimeStamp

    if( msgInterval <= interval) return true
    return false
  },

  sameMessages: function(amount){
    let msg = this.messageLog.filter(log => log.author == this.message.author.id)
    let msgContent = msg.map(log => log.content).join(' ')
    let currentMsg = this.message.content
    let occurance = msgContent.match(/currentMsg/g)
  }
}