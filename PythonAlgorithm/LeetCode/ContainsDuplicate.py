nums = [1,2,3,1]


def checkDuplicate(nums):
    check_nums = set()
    for num in nums:
        if num in check_nums:
            return True
        check_nums.add(num)
    return False

print(checkDuplicate(nums))