class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        calledNums: List[int] = []
        for num in nums:
            if num in calledNums:
                return True
            