# 과자

k, n, m = map(int, input().split())
price = k * n

if m >= price:
    print(0)
else: print(price - m)