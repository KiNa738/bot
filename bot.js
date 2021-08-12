const Discord = require("discord.js")
const bot = new Discord.Client
const config = require("./config.json")

bot.on("ready", () => {
    console.log(`logged in as ${bot.user.tag}`)
})

// !dog , !mimic
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

//!add
bot.on("message", (message) => {
    if(message.author.bot) return
    let mess = message.content
    let cmd = mess.split(' ')[0];
    let split = mess.split(' ');
    let err = 0;
    let x = 0;
    if (cmd != "!add" ) return;
    if(split.length < 3){
        message.channel.send("دخل على الاقل رقمين");
        return;
    }
    for(i = 1; i < split.length; i++){
        if(isNaN(mess.split(' ')[i]) ){
            err = 1;
            break;
        }
        eval ('val_' + i + '= ' + mess.split(' ')[i] + ';');
        x = x + eval('val_' + i);
    }
    if(err == 1){
        message.channel.send("دخل ارقام يابيض");
        return;
    }
    message.channel.send(x); 
})
bot.login(config.token)