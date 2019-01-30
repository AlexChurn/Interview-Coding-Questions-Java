
public class HelloWorld{

     public static void main(String []args){
        int[] arr = new int[] {1,2,3,4,6,7,8};
        System.out.println("The array is ");
        for(int i = 0; i < arr.length-2; i++){
            System.out.print(arr[i] +", ");
        }
         System.out.print(arr[arr.length-1] +". ");
        numFind(arr);
    }

    static void numFind(int[] arr){
        try{
            int length = arr.length;
            int n = arr[length-1];
            int total = n*(n+1)/2;
            System.out.println();
            for(int i = 0; i < length; i++)
                total -= arr[i];
            System.out.println("The missing number is " + total + ".");
        }catch(ArrayIndexOutOfBoundsException e)
        {
            System.out.println("No more chars in the string!");
        }
    }
}
