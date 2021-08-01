import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";

class ModelAdd extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModel} onHide={this.props.handelClose}>
          <Modal.Header closeButton>
            <Modal.Title>add book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.addBook}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Book Name"
                  name="bookName"
                />
                <Form.Control
                  type="text"
                  placeholder="Book Description"
                  name="bookDescription"
                />
                <Form.Control
                  type="text"
                  placeholder="Book Img"
                  name="bookImg"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={this.props.handelClose}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.props.handelClose}>
              ADD
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModelAdd;
