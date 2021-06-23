import axios from 'axios';
import React, { Component } from 'react'

export default class Post extends Component {

    constructor(){
        super()
        this.state = {
            postData:"",
            postResult:""
        }
    }

    onChangedHander = (event)=>{

       var mydata = event.target.value;
       this.setState({postData:mydata});

    }

    onClickHandler = ()=>{

        axios.post('http://ss.rabbil.com/test.php',this.state.postData)
        .then(response=>{
          this.setState({postResult:response.data})
          console.log(this.state.postResult);
        })
        .catch(error=>{
            alert('Something went wrong')
        })

    }
    render() {
        return (
            <div className="container">
                <p>{this.state.postResult}</p>
               <div className="form-group">
                   <label>Name</label>
               <input type="text"  className="form-control"/>
               </div>
               <br></br>
                <button className="btn btn-primary" onClick={this.onClickHandler}>Add</button>
            </div>
        )
    }
}
