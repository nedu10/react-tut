import React from 'react'
import './Person.css'  //Note this styling is not scoped

const person = (props) => {

    // const testing = (e) => {
    //     console.log(e)
    // }

    return (
        <div className="Person" >
            <p onClick={props.click}>I am {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange = {(e) => props.changed(e.target.value)} value={props.name} />
        </div>
    )
}

export default person