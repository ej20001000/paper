package javaAlgorithmStudy;

import java.util.Scanner;

public class Baekjoon1330 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int y = sc.nextInt();

        if(x>y){
            System.out.println(">");
        } else if(x<y){
            System.out.println("<");
        } else
            System.out.println("==");
    }
}
