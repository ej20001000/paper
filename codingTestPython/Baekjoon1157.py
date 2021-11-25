alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
word = input()
answer = ''

word = word.upper()
count = 0

for a in alphabets:
    # count 함수는 string 안에 주어진 글자 수를 리턴
    b = word.count(a)
    if count < b:
        answer = a
        count = b
    elif count == b:
        answer = '?'

print(answer)