package javaAlgorithmStudy;

import java.util.Arrays;
import java.util.Scanner;

public class Baekjoon2752 {
    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        int[] nums = new int[3];

        nums[0] = in.nextInt();
        nums[1] = in.nextInt();
        nums[2] = in.nextInt();

        Arrays.sort(nums);

        for(int i : nums){
            System.out.println(i);
        }

    }
}
