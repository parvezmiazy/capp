import React, { Component } from 'react';
import axios from 'axios';

export default class CountryList extends Component {

    constructor(){
        super()
        this.state ={
            mydata:[]
        }
    }

    // for data get use this method
    componentDidMount(){

        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
          this.setState({mydata:response.data})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render() {

        const myList = this.state.mydata
        const countryName = myList.map((myList)=>{
           
            return <li className="list-group-item">{myList.name}</li>
        })

        return (
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    <ul className="list-group">
                    {countryName}
                    </ul>
                </div>
             
                
            </div>
        )
    }
}
