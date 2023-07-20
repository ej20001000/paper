# 평균 점수

ans = 0

for i in range(5):
    x = int(input())
    
    if x < 40: ans += 40
    else: ans += x

print(int(ans / 5))