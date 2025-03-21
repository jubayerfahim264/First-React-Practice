import React, { Component, createRef } from "react";

class NewBook extends Component {
  constructor(props) {
    super(props);
    this.bookName = createRef();
    this.writer = createRef();
    this.description = createRef();
    // this.state = {
    //   bookName: "",
    //   writer: "",
    //   description: "",
    // };
    // this.HandleInput = this.HandleInput.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }
  HandleSubmit = (event) => {
    console.log(this.bookName.current.value);
    console.log(this.writer.current.value);
    console.log(this.description.current.value);
    event.preventDefault();
  };
  HandleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div className="form">
          <h1>Add New Book</h1>
          <form onSubmit={this.HandleSubmit}>
            <label htmlFor="bookName">Book:</label>
            <br />
            <input
              type="text"
              name="bookName"
              placeholder="Add Book"
              className="form-input"
              ref={this.bookName}
            />
            <br />
            <label htmlFor="writer">Writer:</label>
            <br />
            <input
              type="text"
              name="writer"
              placeholder="Writer Name"
              className="form-input"
              ref={this.writer}
            />
            <br />
            <label htmlFor="description">Description:</label>
            <br />
            <textarea
              name="description"
              placeholder="Write Description"
              className="form-input"
              ref={this.description}
            />
            <br />
            <input
              type="submit"
              value="Add Book"
              style={{
                padding: ".5rem 1rem",
                fontSize: "16px",
                cursor: "pointer",
                width: "50%",
                margin: "1rem",
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default NewBook;
//control form
// <form onSubmit={this.HandleSubmit}><label htmlFor="bookName">Book:</label><br /> <input type="text" name="bookName" placeholder="Add Book" className="form-input" value={this.state.bookName}  onChange={this.HandleInput}/> <br /> <label htmlFor="writer">Writer:</label> <br /> <input type="text"  name="writer" placeholder="Writer Name" className="form-input" value={this.state.writer} onChange={this.HandleInput} /> <br /><label htmlFor="description">Description:</label> <br /> <textarea name="description" placeholder="Write Description" className="form-input" value={this.state.description} onChange={this.HandleInput} /> <br /> <input type="submit" value="Add Book"/>
