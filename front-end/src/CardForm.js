import React from "react";
import { Form, FormInput, FormGroup, Button } from "shards-react";
import API from "./utils/API"

class CardForm extends React.Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = async event => {
    event.preventDefault();

    const card = {
      name: this.state.name,
      cardNumber: this.state.cardNumber,
      cardLimit: this.state.cardLimit,
      balance: this.state.balance,
    };

    // @todo update cards state
    await API.post('/credit-cards', { card })

  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mx-auto mt-4 text-center p-1" style={{ maxWidth: "300px", minHeight: "250px" }}>
        <FormGroup>
          <label htmlFor="#cardName">Name</label>
          <FormInput id="#cardName" name="name" placeholder="Name on card" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#cardNumber">Card Number</label>
          <FormInput id="#cardNumber" name="cardNumber" placeholder="Card number" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#cardLimit">Card Limit</label>
          <FormInput id="#cardLimit" name="cardLimit" placeholder="Card limit" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#balance">Balance</label>
          <FormInput id="#balance" name="balance" placeholder="Initial balance" onChange={this.handleChange} />
        </FormGroup>
        <Button outline>Add</Button>
      </Form>
    )
  }
}

export default CardForm;