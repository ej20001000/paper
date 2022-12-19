word = input()

n = 10

wordLs = [word[i:i+n] for i in range(0, len(word), n)]

for i in wordLs:
    print(i)