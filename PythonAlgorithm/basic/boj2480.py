x, y, z = map(int, input().split())

def printAns(ini, mid, x):
    print(ini + (mid * x))

if x == y and y == z:
    printAns(10000, 1000, x)
elif x == y or z == x:
    printAns(1000, 100, x)
elif y == z:
    printAns(1000, 100, y)
else:
    if x > y and x > z:
        printAns(0, 100, x)
    elif y > z and y > x:
        printAns(0, 100, y)
    else: printAns(0, 100, z)