package primo;

import java.util.Scanner;

public class Primo {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, i, c = 0;
        System.out.print("Digite um Numero para saber se e primo: ");
        n = Integer.parseInt(sc.nextLine());
        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                c++;
            }
        }
        if (c == 2) {
            System.out.println("Sim");
        } 
            else {
                System.out.println("NAO");

            }

    }
}
