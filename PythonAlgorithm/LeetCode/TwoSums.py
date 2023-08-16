from typing import List;

class Solution:
    def twoSum(nums: List[int], target: int) -> List[int]:

        checkIf = False

        for i in (len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    returnList = [i, j]
                    checkIf = True
                    break
            if checkIf:
                break

        return returnList

        
    
    twoSum([3,3], 6)