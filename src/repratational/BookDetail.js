import React from "react";

const BookDetail = (props) => {
  // console.log(props.book);
  if (props.book === null) {
    return <div></div>;
  }
  return (
    <div className="book-card">
      <h2>{props.book.name}</h2>
      <h3>{props.book.writer}</h3>
      <p>{props.book.description}</p>
    </div>
  );
};
export default BookDetail;
