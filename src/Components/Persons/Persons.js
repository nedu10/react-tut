import React from 'react'
import PersonFunction from '../PersonFunction/PersonFunction'

const Persons = (props) => {
    return props.data.map((each_data, index) => {
        return <PersonFunction
        name={each_data.name}
        click={() => props.deleteData(index)} 
        age={each_data.age}
        // onClick= {(index) => this.deleteDataHandler(index)}
        changed={(componentEvent) => props.changeName(index, componentEvent)}
        key = {each_data.id}
        />
      })
}

export default Persons;