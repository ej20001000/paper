import requests
from bs4 import BeautifulSoup
import telegram
import datetime

from apscheduler.schedulers.blocking import BlockingScheduler

bot = telegram.Bot(token = '')
url = 'http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=01&theatercode=0013&date=20201230'

def jobFunction():
    html = requests.get(url)
    # print(html.text)

    soup = BeautifulSoup(html.text, 'html.parser')
    imax = soup.select_one('span.imax')
    if(imax):
        imax = imax.find_parent('div', class_ ='col-times')
        title = imax.select_one('div.info-movie > a > strong').text.strip()
        bot.sendMessage(chat_id = 1, text = title + ' IMAX 예매가 열렸습니다.')
        sched.pause()

sched = BlockingScheduler()
sched.add_job(jobFunction, 'interval', seconds = 30)
sched.start()
