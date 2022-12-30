hour, min, sec = map(int, input().split())
sec += int(input())

while sec > 59:
    min += 1
    sec -= 60
    if min > 59:
        hour += 1
        min = 0
    if hour > 23: hour = 0

print(hour, min, sec)