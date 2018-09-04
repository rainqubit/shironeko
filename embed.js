//embed builder with template
module.exports = (client, title, content, nyaModifier="~", color, fields) => {
  return { embed :{
    /*author:{
      name: client.user.username,
      icon_url: client.user.avatarURL
    },*/
    title: title,
    description: `${content} ${client.config.suffix}${nyaModifier}`,
    color: color,
    fields: fields
  }
}
}