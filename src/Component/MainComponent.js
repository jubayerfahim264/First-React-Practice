import React, { Component } from "react";
import Book from './Book'
class MainComponent extends Component {
  state = {
    books: [
      { id: 1, name: "Swadinotar Dhak", writer: "Sher E Bangla" },
      { id: 2, name: "Rajnitir 50 Bothsor", writer: "Sayed Ahmed" },
      { id: 3, name: "Ami Ja Dekhesi Ja Sunechi", writer: "Sheikh Shadi" },
    ],
    showBooks: true,
  };

  deleteBook = (index) => {
    this.setState({ books: this.state.books.filter((_, i) => i !== index) });
  };

  updateBookName = (event, index) => {
    const books = [...this.state.books];
    books[index] = { ...books[index], name: event.target.value };
    this.setState({ books });
  };

  toggleBooks = () => {
    this.setState((prevState) => ({ showBooks: !prevState.showBooks }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">📚 Book List</h1>
        <button className="btn" onClick={this.toggleBooks}>
          {this.state.showBooks ? "Hide Books" : "Show Books"}
        </button>
        <div className="book-container">
          {this.state.showBooks &&
            this.state.books.map((book, index) => (
              <Book
                key={book.id}
                BookName={book.name}
                WriterName={book.writer}
                Del={() => this.deleteBook(index)}
                inputName={(event) => this.updateBookName(event, index)}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default MainComponent;