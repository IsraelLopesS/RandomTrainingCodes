package media;

import java.util.Scanner;

public class Media {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        double media, nota1, nota2;
        System.out.print("Digite a nota1:");
        nota1 = Double.parseDouble(sc.nextLine());
        System.out.print("Digite a nota2:");
        nota2 = Double.parseDouble(sc.nextLine());
        media = (nota1 + nota2) / 2.0;
        System.out.print("A sua media é:" + media);
        sc.close();
    }

}
