

def selfNum():
    nums = []
    for x in range(1,10000):
        tempCutNum = list(map(int, str(x)))
        num =  x
        for y in tempCutNum:
            num += y
        nums.append(num)

    for x in range(1,10000):
        if x not in nums:
            print(x)

selfNum()


# def answer():
#     naturalNum = set(range(1, 10001))
#     generatedNum = set()

#     for i in range(1, 10001):
#         for j in str(i):
#             i += int(j)
#         generatedNum.add(i)
    
#     selfNum = sorted(naturalNum - generatedNum)
#     for i in selfNum:
#         print(i)

# answer()