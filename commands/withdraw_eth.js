/*CMD
  command: withdraw_eth
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Hello Send The Amount You want To Withdraw 

Minimum : 0.0015
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let chatid = chat.chatid
let address = User.getProperty("addressEth");
let amount = parseFloat(data.message);
let res = Libs.ResourcesLib.userRes("eth");
let withdrawn = Libs.ResourcesLib.userRes("wdEth")
if (address==undefined){
Bot.sendMessage("Error To Be Able to Withdraw Set You're Address ");
}else{
if (amount<0.0015 || amount>res.value()){
Bot.sendMessage(" Error ‼‼ \nPlease Withdraw In The Minimum Withdrawal \nMinimum withdraw Is 0.0015\n\nOr\n\nMake Sure You Have A Sufficient Balance");
}else{
res.remove(amount);
withdrawn.add(amount);
Bot.sendMessage(" Withdrawal Requests Sent ✅ \n\nExpect Payment Within 48 Hours Or Less\n\nReceipt Info 🧾\n\nPayment Address 📬 : "+address+"\nAmount Withdrawn 💸 : "+amount+" ETH\nWithdrawn By 👤 : @"+user.username+"\nCurrency 💱 : ETH");
Api.sendMessage({ chat_id : "@demopaymentchannel" , text : "Withdrawal Requests Sent ✅ \n\nExpect Payment Within 48 Hours Or Less\n\nReceipt Info 🧾\n\nPayment Address 📬 : "+address+"\nAmount Withdrawn 💸 : "+amount+" ETH\nWithdrawn By 👤 : @"+user.username+"\nCurrency 💱 : ETH"})
Bot.sendMessageToChatWithId(chatid , "Withdrawal Requests Received ✅ \n\nExpect Payment Within 48 Hours Or Less\n\nReceipt Info 🧾\n\nPayment Address 📬 : "+address+"\nAmount Withdrawn 💸 : "+amount+" ETH\nWithdrawn By 👤 : @"+user.username+"\nCurrency 💱 : ETH\n\nNote : This Text Is Only For Demo Bot ‼ \nIn You're Real Bot You Are the only one To see this to notify you from a Withdrawal")
}
}


