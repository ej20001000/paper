inputNum = int(input())
maxNum = 0 # 라인 내 가장 큰 숫자
line = 0

while inputNum > maxNum:
    line += 1
    maxNum += line

gap = maxNum - inputNum

if line % 2 == 1:
    print('{}/{}'.format(1 + gap, line - gap))
else:
    print('{1}/{0}'.format(1 + gap, line - gap))