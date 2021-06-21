import React, { Component } from "react";

export default class Jsonlist extends Component {
  datazip = (data) => {
    return <option>{data.zipcode}</option>;
  };

  render() {
    const mylist = [
      {
        city: "Dhaka",
        zipcode: "1230",
      },
      {
        city: "Feni",
        zipcode: "3900",
      },
      {
        city: "Natore",
        zipcode: "5900",
      },
    ];

    const dataItems = mylist.map((datacity) => {
      return <option>{datacity.city}</option>;
    });

    const dataItemsZip = mylist.map(this.datazip);
    return (
      <div className="container">
        <select>{dataItems}</select>
        <select>{dataItemsZip}</select>
      </div>
    );
  }
}
