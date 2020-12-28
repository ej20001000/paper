# import requests
# from bs4 import BeautifulSoup

# url = 'http://www.cgv.co.kr/common/showtimes/iframeTheater.aspx?areacode=01&theatercode=0013&date=20201228'
# html = requests.get(url)
# # print(html.text)

# soup = BeautifulSoup(html.text, 'html.parser')
# titleList = soup.select('div.info-movie')
# for i in titleList:
#     print(i.select_one('a > strong').text.strip())

import datetime
# print(datetime.date.today())
print(datetime.datetime.today().strftime('%Y%m%d'))
date = datetime.datetime.today()
date += datetime.timedelta(days = 1)
print(date.strftime('%Y%m%d'))