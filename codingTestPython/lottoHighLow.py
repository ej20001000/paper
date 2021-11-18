lottos = [44, 1, 0, 0, 31, 25]
win_nums = [31, 10, 1, 1, 6, 19]

# 내 풀이
def solution(lottos, win_nums):
    answer = []
    zeros = 0
    tmp = 0
    for l in lottos:
        if l in win_nums:
            tmp += 1
        if l == 0:
            zeros += 1
    if not zeros and not tmp:
        answer.append(6)
    else:
        answer.append(7 - (tmp+zeros))
    if not tmp:
        answer.append(6)
    else:
        answer.append(7 - tmp)
    return answer

# 정답
def correct(lottos, win_nums):
    # 순위를 미리 지정
    rank = [6, 6, 5, 4, 3, 2, 1]

    # 0의 개수 미리 카운팅
    cnt_0 = lottos.count(0)
    ans = 0

    # 일치 하는 숫자 카운팅
    for x in win_nums:
        # 이렇게 하면 참일 경우 알아서 break
        if x in lottos:
            ans += 1

    # return 문에 미리 정의한 rank 변수를 사용해 순위 결정
    return rank[cnt_0 + ans], rank[ans]