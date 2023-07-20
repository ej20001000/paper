package javaAlgorithmStudy;

import java.util.Scanner;

public class Baekjoon1000 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        String x = sc.nextLine();
        String[] y = x.split("\\s");

        System.out.println(Integer.parseInt(y[0]) + Integer.parseInt(y[1]));

    }
}
