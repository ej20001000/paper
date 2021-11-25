

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
      # 셋은 중복 숫자를 자동으로 없애줌, 셋은 순서가 없음
#     naturalNum = set(range(1, 10001))
#     generatedNum = set()

#     for i in range(1, 10001):
#         for j in str(i):
#             i += int(j)
#         generatedNum.add(i)
      # sorted 함수는 list 타입으로 안됨
#     selfNum = sorted(naturalNum - generatedNum)
#     for i in selfNum:
#         print(i)

# answer()