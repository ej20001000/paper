s = "anagram"
t = "nagaram"

s = [*s]
t = [*t]

s.sort()
t.sort()

print(s == t)
print(t)