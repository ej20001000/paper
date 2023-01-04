# 주사위 게임

from collections import Counter

ans = 0

for _ in range(int(input())):
    nums = list(map(int, input().split()))
    x = 0

    commNum = Counter(nums).most_common()[0]

    if commNum[1] > 2:
        x = 10000 + 1000 * commNum[0]
    elif commNum[1] > 1:
        x = 1000 + 100 * commNum[0]
    else: x = 100 * max(nums)

    if x > ans:
        ans = x

print(ans)