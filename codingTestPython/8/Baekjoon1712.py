nums = input().split(' ')

for i in range(len(nums)):
    nums[i] = int(nums[i])

if nums[2] <= nums[1]:
    print(-1)
else:
    print(int(nums[0] / (nums[2] - nums[1]) + 1))