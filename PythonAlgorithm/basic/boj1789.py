# 수들의 합

s = int(input())
num = 0
i = 1
n = 0

while s != num:
    if num < s:
        num += i
        i += 1
        n += 1
    elif num > s:
        i -= 1
        num = num - (i * 2 - 1)
        n -= 2

print(n)
