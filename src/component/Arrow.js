import React from 'react'



const AlertMe = (a)=>{
   alert(a)
}

const Arrow = ()=> {
    return (
        <div>
            <button onClick = {AlertMe.bind(this,"I am from Arrow Function")} className="btn btn-info m-5">My button</button>
        </div>
    )
}
export default Arrow;