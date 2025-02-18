import React, { Component } from "react";
import "./App.css";

import Book from "./Component/Book";
class App extends Component {
  state = {
    books: [
      { BookName: "WXY", Writer: "xyz" },
      { BookName: "ABC", Writer: "bac" },
      { BookName: "DAS", Writer: "SAD" },
    ],
  };
  ChangeState = (BookPara) => {
    this.setState({
      books: [
        { BookName: BookPara, Writer: "Jubayer Fahim" },
        { BookName: "1971 Fight", Writer: "Sher-E-bangla" },
        { BookName: "Ami Mejor Dalim Bolsi", Writer: "Me:Dalim" },
      ],
    });
  };
  ChangeByInput =e =>{
    this.setState({
      books: [
        { BookName: e.target.value, Writer: "Jubayer Fahim" },
        { BookName: "1971 Fight", Writer: "Sher-E-bangla" },
        { BookName: "Ami Mejor Dalim Bolsi", Writer: "Me:Dalim" },
      ],
    });
  }
  render() {
    const style = {
      width: '50%',
      padding: '.5rem 1rem',
      fontSize: "1.5rem",
      border: '1px solid blue',
      background: 'aqua',
      margin: '10px auto',
      cursor:'pointer'
    }
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button
          className="btn"
          onClick={() => this.ChangeState("Two Thaousand Twenty Five")}
        >
          Click Button
        </button>
        <br />
        <input type="text" name="none" id="none" onChange={this.ChangeByInput} />
        <Book
          BookName={this.state.books[0].BookName}
          WritterName={this.state.books[0].Writer}
          ChangeBy={this.ChangeByInput}
        ></Book>
        <Book
          BookName={this.state.books[1].BookName}
          WritterName={this.state.books[1].Writer}
        ></Book>
        <Book
          BookName={this.state.books[2].BookName}
          WritterName={this.state.books[2].Writer}
          change={() => this.ChangeState(2025)}
        ></Book>
      </div>
    );
  }
}

export default App;
