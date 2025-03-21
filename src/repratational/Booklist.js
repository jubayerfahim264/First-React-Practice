import React, { Component } from "react";
import Book from "../repratational/Book";
import { Link } from "react-router-dom";

class Booklist extends Component {
  render() {
    return this.props.books.map((book, index) => {
      return (
        <Link
          to={"/" + book.id}
          key={book.id}
          style={{ textDecoration: "none" }}
        >
          <Book
            BookName={book.name}
            Writer={book.writer}
            selectBookHandler={() => this.props.selectBookHandler(book.id)}
          />
        </Link>
      );
    });
  }
}
export default Booklist;
