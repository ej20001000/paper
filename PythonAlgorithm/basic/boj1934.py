# 최소공배수

def cal(a, b):
    A, B = a, b
    while a % b != 0:
        print('a, b=', a, b)
        a, b = b, a % b
    print('a, b=', a, b)
    print('answer =', (A * B) // b)

for _ in range(int(input())):
    a, b = map(int, input().split())
    cal(a, b)