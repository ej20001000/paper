
word = input()
alphabets = "abcdefghijklmnopqrstuvwxyz"
needPrint = ''

for a in alphabets:
    if a != 'a':
            needPrint += ' '
    for i, w in enumerate(word):

        if w == a:
            needPrint += str(i)
            break
        
        if i == len(word) - 1:
            needPrint += '-1'
        
print(needPrint)


# 정답
# word = input()
# alphabets = "abcdefghijklmnopqrstuvwxyz"

# for x in alphabets:
#     # find 함수는 지정 문자가 어디에 있는지 인덱스를 반환
#     print(word.find(x), end = ' ')