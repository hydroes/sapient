package org.brian.creditcardprocessor;


import java.math.BigInteger;

public class CreditCardUtils {
    public static boolean isValidLuhn10(String n) throws NumberFormatException {
        new BigInteger(n);
        int[] arr = n.codePoints().map(i->i-'0').toArray();
                int c= 0, sum = 0;
                for (int i=arr.length-1; i>=0; i--) {
                    int el;
                    if (c==1) {
                        el = arr[i]*2;
                        if (el > 9) {
                            el = el / 10 + el % 10;
                        }
                        sum+=el;
                        c=0;
                    } else {
                        c = 1;
                        sum+=arr[i];
                    }
                }
        return sum%10==0;
    }

}
