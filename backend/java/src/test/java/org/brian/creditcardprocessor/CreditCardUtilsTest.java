package org.brian.creditcardprocessor;

import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;


public class CreditCardUtilsTest {
    Map<String, Boolean> testData = new HashMap<>();

    @BeforeClass
    public static void init() {
        Map<String, Boolean> testData = new HashMap<>();
        testData.put("7998713", false);
        testData.put("79927398713", true);
        testData.put("1", false);
        testData.put("0", true);
        testData.put("9999999999999999999", false);
        testData.put("9999999999999999998", true);
    }

    @Test
    public void whenValidNumber() {
        for(String k: testData.keySet()) {
            Assert.assertEquals(testData.get(k), CreditCardUtils.isValidLuhn10(k));
        }
    }

    @Test(expected = NumberFormatException.class)
    public void whenNotANumber() {
        CreditCardUtils.isValidLuhn10("abc");
    }
}