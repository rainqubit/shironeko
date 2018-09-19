//embed builder with template
/**
 * 
 * @param {DiscordClient} client 
 * @param {String} title 
 * @param {String} content 
 * @param {String} nyaModifier 
 * @param {Integer} color 
 * @param {Object} fields 
 */
module.exports = (client, title, content, nyaModifier="~", color, fields) => {
  return { embed :{
    /*author:{
      name: client.user.username,
      icon_url: client.user.avatarURL
    },*/
    title: title,
    description: `${content} ${nyaModifier != "<>" ? client.config.suffix:""}${nyaModifier != "<>" ? nyaModifier: ""}`,
    color: color,
    fields: fields
    }
  }
}