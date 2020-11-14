package codingPractice;

import java.util.Arrays;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        
        Arrays.sort(participant);
        Arrays.sort(completion);

        for(String i:participant){
            System.out.println(i);
        }

        return answer;
    }

}