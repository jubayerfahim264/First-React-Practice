import React from "react";
import "../App.css";
import "../styleSheet/Book.css";
const Book = (props) => {
  return (
    <div className="card">
      <h2>Book:{props.BookName}</h2>
      <h3>Writer:{props.WriterName}</h3>
      <input
        type="text"
        onChange={props.inputName}
        value={props.BookName}
        className="input-field"
      />
      <button onClick={props.Del} className="btn">
        Delete
      </button>
    </div>
  );
};
export default Book;
