package org.brian.creditcardprocessor;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.containsString;
import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CreditCardControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void findAll() throws Exception {
        mockMvc.perform(post("/credit-cards").content("{\"name\":\"Jeremy Clarkson\",\"cardNumber\":\"1234567897\",\"cardLimit\": 100}")
                .contentType(MediaType.APPLICATION_JSON));
        this.mockMvc.perform(get("/credit-cards")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("Jeremy Clarkson")));
    }

    @Test
    public void saveSuccess() throws Exception {
        mockMvc.perform(post("/credit-cards").content("{\"name\":\"Audrey Hepburn\",\"cardNumber\":\"1234567897\",\"cardLimit\": 100}")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    @Test
    public void saveValidatationError() throws Exception {
        mockMvc.perform(post("/credit-cards").content("{\"name\":\"Lisa Adams\",\"cardNumber\":\"1234567890\",\"cardLimit\": 100}")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is4xxClientError());


    }





}