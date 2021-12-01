a = int(input())
x = 1
y = 1
i = 0

while i < a - 1:
    if x == 1 and y ==1 :
        y += 1
        i += 1
    elif x == 1 and y % 2 != 0:
        y += 1
        i += 1
    elif x == 1 and y % 2 == 0:
        while y != 1 and i < a - 1:
            x += 1
            y -= 1
            i += 1
    elif y == 1 and x % 2 == 0:
        x += 1
        i += 1
    elif y == 1 and x % 2 != 0:
        while x != 1 and i < a -1:
            x -= 1
            y += 1
            i += 1
    
print('{}/{}'.format(x, y))