import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
// const { user, isAuthenticated } = this.props.auth0; // error
// import CardBook from "./component/CardBook";
import { Button, Card } from "react-bootstrap";
import ModelAdd from "./component/ModelAdd";
import UpdateModel from "./component/UpdateModel";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      booksData: [],
      index: 0,
      showUpdate: false,
    };
  }

  // component Did Mount function its work after upload the page.
  componentDidMount = async () => {
    let email = this.props.auth0.user.email;
    // console.log("mmmmmmmmmmm");
    // send request to backend
    let url = `http://localhost:3005/getbooks?email=${email}`;
    let resData = await axios.get(url);
    // the data from backend at resData
    // console.log(resData.data);

    await this.setState({
      booksData: resData.data,
    });
  };

  handelShow = () => {
    this.setState({
      showModel: true,
    });
  };
  handelClose = () => {
    this.setState({
      showModel: false,
    });
  };

  addBook = async (e) => {
    e.preventDefault();
    let email = this.props.auth0.user.email;

    const plusBook = {
      email: email,
      name: e.target.bookName.value,
      description: e.target.bookDescription.value,
      img: e.target.bookImg.value,
    };
    console.log(plusBook);

    let resAddData = await axios.post(
      `http://localhost:3005/addbooks`,
      plusBook
    );
    await this.setState({
      booksData: resAddData.data,
      showModel: false,
    });
  };

  deleteBook = async (i) => {
    // let email = this.props.auth0.user.email;
    let objEmail = {
      email: this.props.auth0.user.email,
    };
    console.log(i);

    let deleteData = await axios.delete(
      `http://localhost:3005/deletebooks/${i}`,
      { params: objEmail }
    );
    await this.setState({
      booksData: deleteData.data,
    });
  };

  handelCloseUp = () => {
    this.setState({
      showUpdate: false,
    });
  };

  updateBook = (i) => {
    this.setState({
      index: i,
      showUpdate: true,
    });
  };
  submitUP = async (e) => {
    e.preventDefault();
    let email = this.props.auth0.user.email;
    const upBook = {
      email: email,
      name: e.target.bookName.value,
      description: e.target.bookDescription.value,
      img: e.target.bookImg.value,
    };
    // console.log(upBook);
    let resUpData = await axios.put(
      `http://localhost:3005/updatebooks/${this.state.index}`,
      upBook
    );
    await this.setState({
      booksData: resUpData.data,
    });
  };

  render() {
    return (
      <Jumbotron>
        <Button variant="primary" onClick={this.handelShow}>
          Add
        </Button>
        <ModelAdd
          handelClose={this.handelClose}
          showModel={this.state.showModel}
          addBook={this.addBook}
        />
        <UpdateModel
          showUpdate={this.state.showUpdate}
          handelCloseUp={this.handelCloseUp}
          booksData={this.state.booksData}
          index={this.state.index}
          submitUP={this.submitUP}
        />
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        {/* <CardBook booksData={this.state.booksData} /> */}

        <div className="cardDiv">
          {this.state.booksData.map((ele, i) => {
            return (
              <div key={i}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={ele.img} alt={ele.name} />
                  <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text>{ele.description}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => this.deleteBook(i)}
                    >
                      ❌
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.updateBook(i)}
                    >
                      Update
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
