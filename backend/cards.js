const data = [
  {

    name: 'sparky stardust',
    cardNumber: 12435654,
    cardLimit: 50,
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
    data.push(cardNum);
    return cardNum;
  }
}

exports.cards = new Cards();
