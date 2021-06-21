import React, { Component } from "react";

export default class List extends Component {
  mydataChild = (data) => {
    return <option>{data}</option>;
  };

  myNumberdataChild = (data) => {
    return <option>{data + 10}</option>;
  };
  render() {
    const country = ["Bangladesh", "India", "Canada", "china"];

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // const dataItems = country.map((mydata) => {
    //   //return <li>{mydata}</li>;
    //   return <option>{mydata}</option>;
    // });

    const numberDataItems = numbers.map(this.myNumberdataChild);
    const dataItems = country.map(this.mydataChild);

    return (
      <div className="container">
        {/* <ol>{dataItems}</ol> */}
        <select className="form-control">{dataItems}</select>
        <br></br>
        <select className="form-control">{numberDataItems}</select>
      </div>
    );
  }
}
