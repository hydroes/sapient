package org.brian.creditcardprocessor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/credit-cards")
public class CreditCardController {

    @Autowired
    CreditCardRepository ccr;

    @RequestMapping(method= RequestMethod.POST)
    CreditCard save(@RequestBody CreditCard creditCard) {
        try  {
            if (!CreditCardUtils.isValidLuhn10(creditCard.getCardNumber())) {
                throw new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, "The card number is invalid", null);
            } else if (!(creditCard.getCardNumber().length() >=0) && !(creditCard.getCardNumber().length() <= 19)) {
                throw new ResponseStatusException(
                        HttpStatus.BAD_REQUEST, "The card number length incorrect. The length should be between 1 and 19 digits long", null);
            }
        } catch (NumberFormatException ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "The card number is not a valid number", null);
        }
        return ccr.save(creditCard);
    }


    @RequestMapping( method= RequestMethod.GET)
    Iterable<CreditCard> findAll() {
        return ccr.findAll();
    }

}
