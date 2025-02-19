/* eslint-disable array-callback-return */
import React, { Component } from "react";
import "./App.css";
import Book from "./Component/Book";
class App extends Component {
  state = {
    BooksObj: [
      {id:1, BookName: "Swadinotar Dhak", Writer: "Sher E Bangla" },
      {id:2, BookName: "Rajnitir 50 bothsor", Writer: "Sayed Ahmed" },
      {id:3, BookName: "Ami ja Dekhesi ja Sunechi", Writer: "Sheikh Shadi" },
    ],
  };
  deleteState = (index) => {
    const NewBook = [...this.state.BooksObj]; // Create a copy of the array
    NewBook.splice(index, 1); // Remove the selected book
    this.setState({
      BooksObj: NewBook, 
    });
    console.log(NewBook);
  };

  ChangeByInput = (e) => {
    this.setState({
      bookinput: [
        { BookName: e.target.value, Writer: "Jubayer Fahim" },
        { BookName: "1971 Fight", Writer: "Sher-E-bangla" },
        { BookName: "Ami Mejor Dalim Bolsi", Writer: "Me:Dalim" },
      ],
    });
  };
  render() {
    const style = {
      width: "50%",
      padding: ".5rem 1rem",
      fontSize: "1.5rem",
      border: "1px solid blue",
      background: "aqua",
      margin: "10px auto",
      cursor: "pointer",
    };

    // eslint-disable-next-line array-callback-return
    const bookOne = this.state.BooksObj.map((item, index) => {
      return (
        <Book
          BookName={item.BookName}
          WriterName={item.Writer}
          Del={() => this.deleteState(index)}
          key={item.id}
        ></Book>
      );
    });

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        {bookOne}
      </div>
    );
  }
}

export default App;
