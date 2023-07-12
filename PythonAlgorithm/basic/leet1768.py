class leet1768:
    def mergeAlternately(self, word1: str, word2: str) -> str:

        word1arr = [*word1]
        word2arr = [*word2]
        
        ans = ""

        len(word1arr)
        len(word2arr)

        r = 0

        r = len(word1arr) if len(word1arr) < len(word2arr) else len(word2arr)

        for i in range(r):
            try:
                ans += word1arr[i] + " "
                ans += word2arr[i] + " "
            except:
                print()

        print(ans)

    mergeAlternately(1, "asbdaaaa", "saofas")