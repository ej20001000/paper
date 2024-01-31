def containsDuplicate(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    # 딕셔너리 사용으로 값 비교가 아닌 키값을 사용하여 해당 키값이 존재하는 지 보는 식으로 구현
    numDict = {}

    for num in nums:
        # 키값이 있는지 봄
        if num in numDict:
            return True
        numDict[num] = 1

    return False

a = containsDuplicate([1, 2, 3, 4])

print(a)