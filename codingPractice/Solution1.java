package codingPractice;

import java.util.Arrays;

class Solution1 {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        
        Arrays.sort(participant);
        Arrays.sort(completion);

        int i = 0;
        
        while(i < completion.length){
            if(!participant[i].equals(completion[i])){
                answer = participant[i];
                break;
            } else {
                answer = participant[i+1];
            }
            
            i++;
        }
        
        return answer;
    }

}