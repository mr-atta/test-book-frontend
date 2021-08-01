import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
class CardBook extends React.Component {
  render() {
    return (
      <div className="cardDiv">
        {this.props.booksData.map((ele, i) => {
          return (
            <div key={i}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={ele.img} alt={ele.name} />
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text>{ele.description}</Card.Text>
                  <Button variant="primary">❌</Button>
                  <Button variant="primary">Update</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardBook;
