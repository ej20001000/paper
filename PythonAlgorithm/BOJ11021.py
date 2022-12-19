times = int(input())

for i in range(times):
    nums = input()
    
    numsArr = nums.split(' ')

    addNums = 0
    index = i + 1
    for j in numsArr:
        addNums += int(j)

    print('Case #', index, ': ', addNums, sep = '')