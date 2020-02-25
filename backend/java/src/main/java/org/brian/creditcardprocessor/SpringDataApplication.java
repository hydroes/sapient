package org.brian.creditcardprocessor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class SpringDataApplication {

	@Autowired
	CreditCardRepository ccr;

	@PostConstruct
	public void init() {
		// pre-load some data
		CreditCard cc  = new CreditCard("Jeremy Clarkson", "1234567897", 100);
		ccr.save(cc);
		cc  = new CreditCard("Audrey Hepburn", "1234567897", 100);
		ccr.save(cc);
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringDataApplication.class, args);
	}

}

