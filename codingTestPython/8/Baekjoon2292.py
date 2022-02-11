room = int(input())
num = 1
i = 1
count = 1

while num < room:
    num += 6 * i
    i += 1
    count += 1

print(count)