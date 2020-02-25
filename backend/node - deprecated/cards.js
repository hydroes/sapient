const luhnValidator = require('./luhn-validator')
const data = [
  {
    name: 'sparky stardust',
    number: 12435654,
    balance: 50,
  },
];


class Cards {
  constructor() {
    this.id = 1;
  }
  findAll({ type, limit = 10 }) {
    // return data.filter(d => d.type === type).slice(0, limit);
    return data.slice(0, limit);
  }

  add(card) {
    const cardNum = { id: this.id++, ...card };

    if (!luhnValidator(card.number)) {
      throw new Error('Invalid luhn')
    }

    data.push(cardNum);
    return cardNum;
  }
}

exports.cards = new Cards();
