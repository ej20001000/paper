import telegram
bot = telegram.Bot(token = '1419222931:AAEfY2omQDJudTDnIEP8kRJ8TxSCl-_4oS4')
print(bot)
# print(bot.getUpdates())
# for i in bot.getUpdates():
#     print(i.message)

bot.sendMessage(chat_id = 1491640870, text = '텍스트입니다.')
