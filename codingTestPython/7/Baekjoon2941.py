crot = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
word = input()
count = 0
i = 0

while i < len(word):
    if word[i:i+2:] in crot:
        count += 1
        i += 2
    elif word[i:i+3:] == crot[2]:
        count += 1
        i += 3
    else:
        count += 1
        i += 1

print(count)