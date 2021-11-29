aNums = {2:'ABC', 3:'DEF', 4:'GHI', 5:'JKL', 6:'MNO', 7:'PQRS', 8:'TUV', 9:'WXYZ'}
word = input()
seconds = 0


for x in word:
    i = 2
    while True:
        if x in aNums[i]:
            seconds += i + 1
            break
        i += 1

print(seconds)