# print('풍선')
# print("나비")
# print("ㅋㅋㅋㅋㅋ")
# print("ㅋ"*9)

# print(5>10)
# print(5<10)
# print(True)
# print(False)
# print(not True)
# print(not False)
# print(not (5>10))

# 애완동물을 소개해주세요~
# animal = '고양이'
# age = 4
# name = '해피'
# hobby = '낮잠'
# isAdult = age >= 3

# print('우리집 '+ animal +'의 이름은 '+ name +'예요')
# hobby = '공놀이'
# print(name,'는 ', age,'살이며, ', hobby ,'을 아주 좋아해요')
# print(name+'는 어른일까요? '+ str(isAdult))

'''
여러문장
주석
처리
하는법
작은 따음표
'''

# station = '신도림'
# print(station + '행 열차가 들어오고 있습니다.')

# print(1+1)
# print(3-2)
# print(5*2)
# print(6/3)

# print(2**3) # 2의 3제곱
# print(10%3) # 나머지 구하기
# print(5//3) # 몫 구하기

# print(10 > 3)
# print(4 >= 7)
# print(10 < 3)
# print(5 <= 5)

# print(3 == 3)
# print(4 == 2)
# print(3 + 4 == 7)

# print(1 != 3)
# print(not(1 != 3))

# # and 연산자
# print((3 > 0) and (3 < 5))
# print((3 > 0) & (3 < 5))

# # or 연산자
# print((3 > 0) or (3 > 5))
# print((3 > 0) | (3 > 5))

# print(2 + 3 * 4)
# print((2 + 3) * 4)
# number = 2 + 3 * 4
# print(number)
# number = number + 2
# print(number)

# number += 2
# print(number)

# number *= 2
# print(number)

# number /= 2
# print(number)

# number -= 2
# print(number)

# number %= 5
# print(number)

# print(abs(-5))
# print(pow(4, 2))
# print(4**2)
# print(max(5, 12))
# print(min(5, 12))
# print(round(3.14))
# print(round(4.99))

# from math import *
# print(floor(4.99)) # 내림
# print(ceil(3.14)) # 올림
# print(sqrt(16)) # 제곱근

# from random import *

# print(random()) # 0.0 ~ 1.0 미만의 임의의 값 생성
# print(random() * 10)
# print(int(random() * 100))
# print(int(random()* 10) + 1)

# print(int(random() * 45) + 1)
# print(randrange(1, 46)) # 1 ~ 46 미만의 임의의 값 생성

# print(randint(1,45)) # 1, 45 포함

# from random import *
# date = randint(4,28)
# print('오프라인 스터디 모임 날짜는 매월 '+ str(date) + '일로 선정 되었습니다.')

# sentence = '나는 소년입니다'
# print(sentence)
# sentence2 = "나는 소년입니다"
# print(sentence2)
# sentence3 = """나는 소년이고,
# 엔터 누르면 나는 따로 있지요
# 파이썬은 쉬워요"""
# print(sentence3)

# jumin = '990120-1234567'
# print('성별 : ' + jumin[7])
# print('연 : '+ jumin[0:2]) # 99
# print('월 : ' + jumin[2:4])
# print('일 : ' + jumin[4:6])

# print('생년월일 : ' + jumin[:6])
# print('뒤 7자리 : ' + jumin[7:])
# print('뒤 7자리 (뒤에서부터) : ' + jumin[-7:])

# python = 'Python is Amazing'
# print(python.lower())
# print(python.upper())
# print(python[0].isupper())
# print(len(python))
# print(python.replace("Python", "Java"))

# index = python.index('n')
# print(index)
# index = python.index('n', index + 1)
# print(index)

# print(python.find('Python'))
# print(python.index('Python'))

# print(python.find('Java')) # -1 출력
# print(python.index('Java')) # 에러 뜸

# # 방법 1
# print('a' + 'b')
# print('a', 'b')

# print('나는 %d살입니다.' % 20)
# print('나는 %s을 좋아해요.' % '파이썬')
# print('Apple 은 %c로 시작해요.' % 'A')

# print('나는 %s살입니다.' % 20)

# print('나는 %s색과 %s색을 좋아해요.' % ('파란', '빨간'))

# # 방법 2
# print('나는 {}살입니다.'.format(20))
# print('나는 {1}색과 {0}색을 좋아해요.'.format('파란', '빨간'))

# # 방법 3
# print('나는 {age}살이며, {color}색을 좋아해요.'.format(age = 20, color = '빨간'))

# # 방법 4
# age = 20
# color = '빨간'
# print(f'나는 {age}살이며, {color}색을 좋아해요.')

# print('백문이 불여일견 \n백견이 불여일타')

# print('저는 \'나도코딩\'입니다.')

# print('D:\\Dev\\pythonWorkspace')

# # \r : 커서를 맨 앞으로 이동(맨 앞의 문자를 대체)
# print('Red Pine Apple\rBig') # BigPine Apple 출력(스페이스바 기준 문자 슬라이스)

# # \b : 백스페이스(한 글자 삭제)
# print("Redd\bApple")

# # \t : 탭
# print('Red\tApple')

# 내 풀이

# site = 'http://daum.com'
# site = site.replace('http://', '')
# site = site.replace(site[site.find('.'):], '')
# password = site[:3] + str(len(site)) + str(site.count('e')) + '!'
# print(password)

# 해설

# url = 'http://naver.com'
# myStr = url.replace('http://', '')
# myStr = myStr[:myStr.index('.')]
# password = myStr[:3] + str(len(myStr)) + str(myStr.count('e')) + '!'
# print('{} 의 비밀번호는 {} 입니다.'.format(url, password))

# 리스트

# subway = ['유재석', '조세호', '박명수']
# print(subway)

# print(subway.index('조세호'))

# subway.append('하하')
# print(subway)

# subway.insert(1, '정형돈')
# print(subway)

# # 제일 뒷값 빼기
# print(subway.pop())
# print(subway)

# subway.append('유재석')
# print(subway.count('유재석'))

# numList = [5,2,4,3,1]
# numList.sort()
# print(numList)
# numList.reverse()
# print(numList)

# numList.clear()
# print(numList)

# mixList = ['조세호', 20, True]
# print(mixList)
# numList = [1,2,3,4,5]
# numList.extend(mixList)
# print(numList)

# cabinet = {3:'유재석', 100: '김태호'}
# print(cabinet[3])
# print(cabinet[100])

# print(cabinet.get(3))
# # print(cabinet[5]) # 에러 뜸
# print(cabinet.get(5, '사용 가능')) # 원래 none인데 뒤에 값 넣으면 대체 값 줌
# print('hi')

# print(3 in cabinet) # True
# print(5 in cabinet) # False

# cabinet = {'A-3' : '유재석', 'B-100' : '김태호'} # 키 값이 int가 아니어도 됨
# print(cabinet['A-3'])
# print(cabinet['B-100'])

# # 추가 하는 법
# cabinet['C-20'] = '조세호' # 키 값 unique시 아무 일 없이 추가
# cabinet['A-3'] = '김종국' # 키 값이 이미 있을 시 덮어싀움('유재석'이 지워지고 그 자리에 '김종국'이 추가)

# print(cabinet)

# # 삭제 하는 법
# del cabinet['A-3']
# print(cabinet)

# # key 값만 출력
# print(cabinet.keys())

# # value 값만 출력
# print(cabinet.values())

# # key, value 쌍으로 출력
# print(cabinet.items())

# cabinet.clear()
# print(cabinet)

# menu = ('돈까스', '치즈까스')
# print(menu[0])
# print(menu[1])

# # menu.add('생선까스') # 에러(튜플은 생성 후 변경 불가)

# # name ='김종국'
# # age = 20
# # hobby = '코딩'
# # print(name, age, hobby)

# (name, age, hobby) = ('김종국', 20, '코딩')
# print(name, age, hobby)

# # 집합(set)
# # 중복 안됨, 순서 없음
# mySet = {1,2,3,3,3}
# print(mySet)

# java = {'유재석', '김태호', '양세형'}
# python = set(['유재석', '박명수'])

# # 교집합
# print(java & python) # 교집합(java와 python 둘 다에 있는 값을 이끌어냄)
# print(java.intersection(python)) # 위에 것과 동일한 결과

# # 합집합
# print(java | python)
# print(java.union(python))

# # 차집합
# print(java - python)
# print(java.difference(python))

# python.add('김태호')
# print(python)

# python.remove('김태호')
# print(python)

# # 자료 구조의 변경
# # 커피숍
# menu = {'커피', '우유', '주스'}
# print(menu , type(menu))

# menu = list(menu)
# print(menu , type(menu))

# menu = tuple(menu)
# print(menu , type(menu))

# menu = set(menu)
# print(menu , type(menu))

# 퀴즈 4

# idList = []

# i = 1

# while i <= 20:
#     idList.append(i)
#     i += 1

# from random import *

# # print(idList)
# shuffle(idList)

# winners = sample(idList, 4)
# print(winners[0])
# print(winners[1], winners[2], winners[3])

# 해설

# from random import *
# users = range(1, 21) # 1부터 20까지 숫자를 생성
# # print(type(users)) # range type
# users = list(users)
# # print(type(users)) # list type

# # print(users)
# shuffle(users)
# # print(users)

# winners = sample(users, 4)
# print(' -- 담청자 발표 -- ')
# print('치킨 담청자 : {0}'.format(winners[0]))
# print('커피 담청자 : {0}'.format(winners[1:]))
# print('축하합니다')

# if

# weather = input('오늘 날씨는 어때요?')

# if weather == '비' or weather == '눈':
#     print('우산을 챙기세요')
# elif weather == '미세먼지':
#     print('마스크를 챙기세요')
# else:
#     print('준비물 필요 없어요')

# temp = int(input('기온은 어때요?'))
# if 30 <= temp:
#     print('너무 더워요, 나가지 마세요')
# elif 10 <= temp and temp < 30:
#     print('괜찮은 날씨예요')
# elif 0 <= temp < 10:
#     print('외투를 챙기세요')
# else:
#     print('너무 추워요, 나가지 마세요')

# for waitingNo in range(1, 6):
#     print('대기번호 : {0}'.format(waitingNo))

# starbucks = ['아이언맨', '토르', '아이엠 그루트']
# for customer in starbucks:
#     print('{0}, 커피가 준비되었습니다'.format(customer))

# while

# customer = '토르'
# index = 5
# while index >= 1:
#     print('{0}, 커피가 준비되었습니다. {1} 번 남았어요'.format(customer, index))
#     index -= 1
#     if index == 0:
#         print('커피는 폐기처분되었습니다')

# customer = '토르'
# person = 'unknown'

# while person != customer:
#     print('{0}, 커피가 준비 되었습니다.'.format(customer))
#     person = input('이름이 어떻게 되세요?')
    
# continue & break

# absent = [2, 5] # 결석
# noBook = [7] # 책을 깜빡했음
# for student in range(1, 11):
#     if student in absent: # 개중요(개편함)
#         continue
#     elif student in noBook:
#         print('오늘 수업 여기까지, {}는 교무실로 따라와'.format(student))
#         break
#     print('{0}, 책을 읽어봐'.format(student))

# students = list(range(1,6))
# print(students)
# students = [i + 100 for i in students]
# print(students)

# students = ['Iron man', 'Thor', 'I am groot']
# students = [len(i) for i in students]
# print(students)

# students = ['Iron man', 'Thor', 'I am groot']
# students = [i.upper() for i in students]
# print(students)

# import random

# customers = 0
# ok = ''
# randTime = 0
# for time in range(1,51):
#     randTime = random.randint(5, 50)
#     if randTime < 16:
#         ok = 'O'
#         customers += 1
#     else:
#         ok = ' '        
#     print('[{}] {}번째 손님 (소요시간 : {}분)'.format(ok, time, randTime))

# print('총 탑승 승객 : {} 분'.format(customers))

# from random import *
# cnt = 0
# for i in range (1,51):
#     time = randrange(5,51)
#     if 5 <= time <=15:
#         print('[O] {}번째 손님 (소요시간 : {}분)'.format(i, time))
#         cnt += 1
#     else:
#         print('[ ] {}번째 손님 (소요시간 : {}분)'.format(i, time))

# print('총 탑승 승객 수 : {} 분'.format(cnt))

# 함수

# def openAccount():
#     print("새로운 계좌가 생성되었습니다.")

# def deposit(balance, money):
#     print('입금이 완료되었습니다. 잔액은 {} 원입니다.'.format(balance+money))
#     return balance + money

# def withdraw(balance, money):
#     if balance >= money:
#         print('출금이 완료되었습니다. 잔액은 {} 원입니다.'.format(balance-money))
#     else:
#         print('출금이 완료되지 않았습니다. 잔액은 {} 원입니다.'.format(balance))

# def withdraw_night(balance, money):
#     commission = 100
#     return commission, balance - money - commission

# balance = 0
# balance = deposit(balance, 1000)

# # withdraw(balance, 500)

# commission, balance = withdraw_night(balance, 500)
# print('수수료 {} 원이며, 잔액은 {}원 입니다.'.format(commission, balance))

# 기본값
# def profile(name, age=17, mainLang='파이썬'):
#     print('이름: {}\t나이: {}\t주 사용 언어: {}'.format(name, age, mainLang))

# profile(name = '유재석', mainLang = '파이썬', age = 20)
# profile(mainLang = '자바', name = '김태호', age = 17)

# 가변인자
# def profile(name, age, *language):
#     print('이름: {}\t나이: {}\t'.format(name, age), end = ' ')
#     for lang in language:
#         print(lang, end = ' ')
#     print()

# profile('유재석', 20, 'Python', 'Java', 'C', 'C++', 'C#')
# profile('김태호', 25, 'Kotlin', 'Swift')

# 지역변수와 전역변수
# gun = 10

# def checkpoint(soldiers):
#     global gun
#     gun = gun - soldiers
#     print('[함수 내] 남은 총 : {}'.format(gun))

# def checkpointRet(gun, soldiers):
#     gun = gun - soldiers
#     print('[함수 내] 남은 총 : {}'.format(gun))
#     return gun

# print('전체 총 : {}'.format(gun))
# gun = checkpointRet(gun, 2)
# print('남은 총 : {}'.format(gun))

# 퀴즈 #6
# 표준 체중

