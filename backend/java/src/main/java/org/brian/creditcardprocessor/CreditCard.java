package org.brian.creditcardprocessor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CreditCard {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String cardNumber;
    private Number cardLimit;
    private Number balance = 0;

    public CreditCard() {};

    public CreditCard(String name, String cardNumber, Number cardLimit) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.cardLimit = cardLimit;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Number getCardLimit() {
        return cardLimit;
    }

    public void setCardLimit(Number cardLimit) {
        this.cardLimit = cardLimit;
    }

    public Number getBalance() { return balance; }

    public void setBalance(Number balance) { this.balance = balance; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CreditCard)) return false;

        CreditCard that = (CreditCard) o;

        if (getName() != null ? !getName().equals(that.getName()) : that.getName() != null) return false;
        if (getCardNumber() != null ? !getCardNumber().equals(that.getCardNumber()) : that.getCardNumber() != null)
            return false;
        return getCardLimit() != null ? getCardLimit().equals(that.getCardLimit()) : that.getCardLimit() == null;
    }

    @Override
    public int hashCode() {
        int result = getName() != null ? getName().hashCode() : 0;
        result = 31 * result + (getCardNumber() != null ? getCardNumber().hashCode() : 0);
        result = 31 * result + (getCardLimit() != null ? getCardLimit().hashCode() : 0);
        return result;
    }
}
