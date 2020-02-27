import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, Badge } from "shards-react";
import CardForm from "./CardForm"

class CardScreen extends React.Component {
  render() {
    const { name, number, balance, isLoading } = this.props;

    const cardDetails = (
      <div>
        <h4 className="mb-0">{name}</h4>
        <Badge theme="success"> Number: {number}</Badge> <br />
        <Badge theme="info">£{balance}</Badge>
      </div>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <>
        <CardForm />
        <Card
          className="mx-auto mt-4 text-center p-5"
          style={{ maxWidth: "300px", minHeight: "150px" }}
        >
          {isLoading ? loadingMessage : cardDetails}
        </Card>
      </>
    );
  }
}

CardScreen.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  balance: PropTypes.number,
  isLoading: PropTypes.bool
};

export default CardScreen;
