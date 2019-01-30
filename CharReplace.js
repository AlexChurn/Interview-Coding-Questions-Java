public class HelloWorld{

     public static void main(String []args){
        String srt = "poor";
        System.out.println("The word is " + srt + ".");
        charReplace(srt, 'l', 0);
    }

    static void charReplace(String str, char ch, int c){
        try{
            if(str.charAt(c) == 'r')
                System.out.println("The new word is " + str.replace('r', 'l')+".");
            c++;
            charReplace(str, ch, c);

        }catch(StringIndexOutOfBoundsException e)
        {
            System.out.println("No more chars in the string!");
        }
    }
}
