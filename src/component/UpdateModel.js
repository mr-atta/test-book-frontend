import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

class UpdateModel extends React.Component {
  render() {
    console.log(this.props.booksData);

    return (
      <div>
        <Modal show={this.props.showUpdate} onHide={this.props.handelCloseUp}>
          <Modal.Header closeButton>
            <Modal.Title>update book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.submitUP}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  //   defaultValue={this.props.booksData[this.props.index].name}
                  name="bookName"
                />
                <Form.Control
                  type="text"
                  //   defaultValue={
                  //     this.props.booksData[this.props.index].description
                  //   }
                  name="bookDescription"
                />
                <Form.Control
                  type="text"
                  //   defaultValue={this.props.booksData[this.props.index].img}
                  name="bookImg"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={this.props.handelCloseUp}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateModel;
