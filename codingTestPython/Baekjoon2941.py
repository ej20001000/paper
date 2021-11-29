crot = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
word = input()
count = 0

i = 0

while i < len(word) - 1:
    if word[i:i+2:] in crot:
        count += 1
        i += 2
    else:
        count += 1
        i += 1

print(count)