/*CMD
  command: re_btc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hello Admin Send The Amount You Want to Remove .
  keyboard: 
  aliases: 
CMD*/

let msg = data.message;
if (msg=="Cancel"){
Bot.runCommand("Admin")
}else{
let rem = parseFloat(msg);
let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("btc", tgid);
res.removeAnyway(rem); 
Bot.sendMessage("Success Check Hes Balance Now");
Bot.sendMessageToChatWithId(tgid, "The Admin Remove "+rem+" BTC From You're Balance ");
Bot.runCommand("Admin");
}
