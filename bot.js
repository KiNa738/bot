const Discord = require("discord.js")
const bot = new Discord.Client
const config = require("./config.json")

bot.on("ready", () => {
    console.log(`logged in as ${bot.user.tag}`)
})

bot.on("message", (message) => {
    if(message.author.bot) return
    let mess = message.content
    let split = mess.split(' ')[0]
    // console.log(split)
    if (split == "!dog") {
        message.channel.send("No You")
        return
    }
    if (split != "!mimic" ) return
    let result = mess.substr(mess.indexOf(" ") + 1)
    message.channel.send(result)
})
// bot.on("message", (message) => {
//     if(message.author.bot) return
//     if (message.content == "!dog") 
//     message.channel.send("No You")
// })

// bot.on("message", (message) => {
//     if(message.author.bot) return
//     if (message.content == "!dog") return;
//     message.channel.send(message)
// })

bot.login(config.token)