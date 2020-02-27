import React from "react";

import API from "./utils/API";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      number: null,
      balance: null
    };
  }

  render() {
    const { isLoading, name, number, balance } = this.state;

    return (
      <Card isLoading={isLoading} name={name} number={number} balance={balance} />
    );
  }

  async componentDidMount() {
    // Load async data.
    let cardData = await API.get('/credit-cards', {
      params: {
        limit: 10,
      }
    });

    // Parse the results for ease of use.
    cardData = cardData.data[0];

    // Update state with new data and re-render our component.
    const name = cardData.name;
    const number = cardData.cardNumber;
    const balance = cardData.balance;

    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        number,
        balance
      }
    });
  }
}

export default App;
