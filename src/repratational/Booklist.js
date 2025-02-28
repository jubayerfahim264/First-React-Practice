import React, { Component } from "react";
import Book from "../repratational/Book";
// import { render } from "@testing-library/react";

class Booklist extends Component {
  render() {
    return this.props.books.map((book, index) => {
      return (
        <Book
          BookName={book.name}
          Writer={book.writer}
          key={book.id}
          selectBookHandler={() => this.props.selectBookHandler(book.id)}
        />
      );
    });
  }
}
export default Booklist;