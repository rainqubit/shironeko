//embed builder with template
module.exports = (client, title, content, color, fields) => {
  return { embed :{
    author:{
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: title,
    description: `${content} ${client.config.postfix}`,
    color: color,
    fields: fields
  }
}
}