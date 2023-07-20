x = int(input())

for i in range(x):
    nums = input()

    numsArr = nums.split(',')

    addNum = 0

    for j in numsArr:
        addNum += int(j)

    print(addNum)