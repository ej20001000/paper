n = int(input())
words = []
count = 0

for i in range(0, n):
    words.append(input())

for word in words:
    alphabets = []
    for i, letter in enumerate(word):
        if letter not in alphabets:
            alphabets.append(letter)
        else:
            print
            if letter != word[i - 1]:
                break
        if i + 1 == len(word):
            count += 1

print(count)