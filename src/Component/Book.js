import React from "react";
import "../App.css";
import "../styleSheet/Book.css";
const Book = (props) => {
  return (
    <div onClick={props.Del} className="card">
      <h2>Book:{props.BookName}</h2>
      <h3>Writer:{props.WriterName}</h3>
    </div>
  );
  // <input type="text" name="none" id="none" onChange={props.ChangeBy} value={props.BookName}/>
};
export default Book;
