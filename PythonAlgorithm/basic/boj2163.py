x, y = map(int, input().split())

col = x - 1
row = y - 1
answer = row * x + col

print(answer)