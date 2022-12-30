weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
sum = 0
one = [1,3,5,7,8,10,12]
zero = [4,6,9,11]

x, y = map(int, input().split(' '))

for i in range(1, x):
    if i in one: sum += 31
    elif i in zero: sum += 30
    elif i==2: sum += 28

sum += y

print(weekday[sum%7])