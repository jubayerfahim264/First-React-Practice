import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import BookList from "../assets/book";
import NewBook from "../repratational/NewBook";
import Booklist from "../repratational/Booklist";
import BookDetail from "../repratational/BookDetail";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BookList || [], 
      selectBook: null,
    };
  }
  selectBookHandler = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({ selectBook: book });
  };
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-book">New Book</NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Booklist
                books={this.state.books}
                selectBookHandler={this.selectBookHandler}
              />
            }
          />
          <Route
            path="/new-book"
            element={<NewBook books={this.state.books} />}
          />
          <Route
            path="/:id"
            element={<BookDetail book={this.state.selectBook} />}
          />
        </Routes>
      </div>
    );
  }
}

export default MainComponent;
