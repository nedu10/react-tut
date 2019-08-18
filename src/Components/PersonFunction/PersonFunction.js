import React from 'react'
import Radium from 'radium'
import './Person.css'  //Note this styling is not scoped

const person = (props) => {

    // const testing = (e) => {
    //     console.log(e)
    // }

    const style_person = {
        '@media (min-width: 500px)': {
            width: "400px"
        }
    }

    return (
        <div className="Person" style = {style_person} >
            <p onClick={props.click}>I am {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange = {(e) => props.changed(e.target.value)} value={props.name} />
        </div>
    )
}

export default Radium(person)