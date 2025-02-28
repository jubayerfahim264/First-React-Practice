import React from "react";
import "../App.css";
import "../styleSheet/Book.css";
const Book = (props) => {  
  return (
    <div className="card" onClick={props.selectBookHandler}>
      <h2>Book:{props.BookName}</h2>
      <h3>Writer:{props.Writer}</h3>
    </div>
  );
};
export default Book;
