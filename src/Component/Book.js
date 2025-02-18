import React from "react";
import "../App.css";
import '../styleSheet/Book.css'
const Book = props => {
  return (
    <div className="card">
      <h2>Book:{props.BookName}</h2>
      <button onClick={props.change} className="btn">Change Book Name</button>
      <h3>Writter:{props.WritterName}</h3>
      <input type="text" name="none" id="none" onChange={props.ChangeBy} value={props.BookName}/>
    </div>
  );
};
export default Book;
