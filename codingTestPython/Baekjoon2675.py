y = int(input())
j = 0
while j < y:
    word = input().split(' ')
    answer = ''

    for x in word[1]:
        i = 0
        while i < int(word[0]):
            answer += x
            i += 1
        
    print(answer)
    j += 1