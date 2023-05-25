package imc;

import java.util.Scanner;

public class Imc {

    public static void main(String[] args) {
       Scanner sc = new Scanner (System.in);
       double peso, alt, massa;
       System.out.print("Seu peso: ");
       peso = Double.parseDouble(sc.nextLine());
       System.out.print("Sua altura: ");
       alt = Double.parseDouble(sc.nextLine());
       massa = peso / (alt * alt);
       System.out.println("IMC: " + massa);
       
       if (massa < 18.5){
           System.out.println("Abaixo do peso");}
       else if (massa < 25){
           System.out.println("Peso ideal");}
       else if (massa < 30){
           System.out.println("Sobrepeso");}
       else if (massa < 35){
           System.out.println("Obesidade Grau 1");}
       else if (massa < 40){
           System.out.println("Obesidade Grau 2");}
       else {
            System.out.println("Obesidade Grau 3");}
       double pi = --alt;
       String str = String.valueOf(pi);
       str = str.replaceAll("\\D+","");
       System.out.println("Seu peso ideal : "+ str);
      
    }
    
}
