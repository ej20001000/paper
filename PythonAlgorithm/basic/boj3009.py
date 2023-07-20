# 네번째 점

from collections import Counter

l = []
s = []

for _ in range(3):
    x, y = map(int, input().split())
    l.append(x)
    s.append(y)

lcl = Counter(l).most_common()[-1]
scl = Counter(s).most_common()[-1]

print(lcl[0], scl[0])