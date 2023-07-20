# 최소공배수

for _ in range(int(input())):
    a, b = map(int, input().split())

    mult = a * b

    while a % b != 0:
        a, b = b, a % b
    
    print(int(mult / b))