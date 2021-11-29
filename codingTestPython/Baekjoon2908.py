a = input().split(' ')
x = a[0][::-1]
y = a[1][::-1]
if x > y:
    print(x)
else:
    print(y)