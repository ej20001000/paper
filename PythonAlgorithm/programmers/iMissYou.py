def solution(name, yearning, photo):
    
    yearnPoint_dic = {n : y for n, y in zip(name, yearning)}
    answer = []
    for nList in photo:
        sum = 0
        for nTity in nList:
            if nTity in yearnPoint_dic:
                sum += yearnPoint_dic[nTity]
            else:
                sum += 0
        answer.append(sum)

    return answer

name = ["may", "kein", "kain", "radi"]
yearning = [5, 10, 1, 3]
photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]

print(solution(name, yearning, photo))