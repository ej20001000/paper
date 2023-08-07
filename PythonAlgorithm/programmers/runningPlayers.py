def solution(players, callings):
    
    players_dict = {player:i for i, player in enumerate(players)};
    rank_dict = {i:player for i, player in enumerate(players)};

    for calling in callings:
        rank =  players_dict[calling]

        players_dict[rank_dict[rank - 1]], players_dict[rank_dict[rank]] = players_dict[rank_dict[rank]], players_dict[rank_dict[rank - 1]]
        rank_dict[rank - 1], rank_dict[rank] = rank_dict[rank], rank_dict[rank - 1]
    
    return list(rank_dict.values())

players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]

print(solution(players, callings))