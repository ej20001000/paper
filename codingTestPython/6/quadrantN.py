a = int(input())
b = int(input())
c = 0

if a > 0 and b > 0:
    c = 1
elif a > 0 and b < 0:
    c = 4
elif a < 0 and b < 0:
    c = 3
else:
    c = 2

print(c)