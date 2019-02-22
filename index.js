const Telegraf = require("telegraf");

console.log("running....");
const API_KEY = "696261432:AAGOdX8FLH06XnQAr1DvAgddKeoDsiK6UQQ";

const bot = new Telegraf(API_KEY);

//modern syntax allows me to write it shorter with deault return
const greet2 = name => "Hello!!!!!!!!!!!!!!!" + name; 


const helpHandler = ctx => ctx.reply("Hello!!!!!!!!!!!!!!!!!!");
bot.help(helpHandler);

bot.command("hello", context => context.reply("boo"));
bot.launch();
