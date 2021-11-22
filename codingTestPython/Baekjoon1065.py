# 정수에서 각 자리가 등차수열을 이루는 한수를 구하는 함수
def hansu(x):
    # 주어진 x에서 1부터 x까지의 숫자를 할 변수
    j = 1
    # 한수의 수를 카운트
    count = 0
    while j < x + 1:
        # 2자리수 이하는 모두 한수
        if j > 99:
            # 3자리수 숫자의 각 자리를 list로 변환
            jList = list(map(int, str(j)))
            # 첫자리와 다음 자리의 차를 구함
            diff = jList[0] - jList[1]
            # 임시 index
            i = 1
            # outofindex 에러가 일어나지 않게 list의 마지막 두번째 까지만 루프문을 돌림
            while i < len(jList) - 1:
                # 모든 자리의 차들이 diff과 같지 않을 시 break
                if jList[i] - jList[i+1] != diff:
                    break
                # 마지막 두번째 자리까지 와서 위 if문 통과 시 count +
                if i == len(jList) - 2:
                    count += 1
                i += 1
        else:
            count += 1
        j += 1

    return count

x = int(input())

print(hansu(x))