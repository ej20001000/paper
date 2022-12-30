x, y = map(int, input().split())
y += int(input())

while y > 59:
    y -= 60
    x += 1
    if x >  23: x = 0

print(x, y)