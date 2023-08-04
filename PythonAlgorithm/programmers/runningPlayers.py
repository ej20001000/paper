def solution(players, callings):
    
    for calling, player in zip(callings, players):
        if calling in players:
            PIndex = players.index(calling)
            tmpFrontP = players[PIndex - 1]
            players[PIndex - 1] = calling
            players[PIndex] = tmpFrontP
    
    return players

players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]

print(solution(players, callings))