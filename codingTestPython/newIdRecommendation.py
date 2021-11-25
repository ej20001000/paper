def solution(new_id):
    # 제한문자 정의
    needRemoval = ['~','!','@','#','$','%','^','&','*','(',')','=','+','[','{',']','}',':','?','<','>','/']
    answer = ''

    # 1단계 소문자 변경
    answer = new_id.lower()
    # 2단계 제한문자 제거
    for x in needRemoval:
        if x in answer:
            answer = answer.replace(x, '')
    # 3단계 마침표 연속 치환
    while True:
        if '..' in answer:
            answer = answer.replace('..', '.')
        else:
            break
    # 4단계 처음이나 끝에 마침표 제거
    while True:
        if answer:
            if '.' in answer[0]:
                answer = answer[1:]
            elif '.' in answer[len(answer)-1]:
                answer = answer[:len(answer)-1]
            else:
                break
        else:
            break
    # 5단계 빈 문자열 a로 채우기
    for x in answer:
        if x == ' ':
            answer = answer.replace(' ', 'a')
    # 6단계 16자 이상이면 15자로 줄이기
    if len(answer) > 15:
        answer = answer[:15]
    # 끝에 마침표 다시 체크
        while True:
            if '.' in answer[len(answer)-1]:
                answer = answer[:len(answer)-1]
            else:
                break
    # 7단계 2자 이하면 3자가 될때까지 마지막 문자 복사
    if answer:
        while len(answer) < 3:
            answer = answer + answer[len(answer) - 1]

    if not answer:
        x = 0
        while len(new_id) > x:
            answer = answer + 'a'
            x += 1


    return answer


print(solution("=.="))