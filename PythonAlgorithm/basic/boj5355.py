# 화성 수학

howMany = int(input())

for i in range(howMany):
    x = input().split()
    answer = 0
    for num in x:
        if num == '@':
            answer *= 3
        elif num == '%':
            answer += 5
        elif num == '#':
            answer -= 7
        else: answer += float(num)
    
    print(format(answer, ".2f"))