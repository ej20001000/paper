sentence = input()
# strip 함수는 앞뒤의 공백을 없애줌 *앞만 원하면 lstrip 뒤만 원하면 rstrip
sentence = sentence.strip()
if sentence:
    sList = sentence.split(' ')
    print(len(sList))
else:
    print(0)

# # 정답
# s = input.strip()
# print(s.count(' ') + 1 if s else 0)