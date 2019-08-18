import React from 'react'
import './Cockpit.css'

const Cockpit = (props) => {

    // ading inline styling
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid #eee',
        padding: '8px',
        margin: '16px',
        cursor: "pointer",
        
      }
      const style2 = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid #eee',
        padding: '8px',
        margin: '16px',
        cursor: "pointer",
        color: "white",
        ':hover': {  //implementing scoped hover style
          backgroundColor: 'lightgreen',
          color: 'black'
        }  
      }
  
      if (props.showCard) {
        style2.backgroundColor = 'red'
        style2[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }  
      }
      
      const styleDiv = {
        width: '60%',
        margin: 'auto'
      }

    const classes = []
    if (props.data.length <= 2) {
      classes.push('red')
    }
    if (props.data.length <= 1) {
      classes.push('bold')
    }

    return (
        <div>
            <h1>Hello</h1>
          <p className = {classes.join(' ')}>I am learniing react</p>
          <div style= {styleDiv} >
            <button 
                // style={props.showCard ? {...style2, backgroundColor: 'red'} : {...style2, backgroundColor: 'green'}} 
                style= {style2}
                onClick={props.toggleCard} >
                {props.showCard ? 'Remove Card' : 'show Card'}
                </button>
                <button 
                style={style} 
                onClick= {props.switchCard}
                >Switch Properties
            </button>
          </div>
        </div>
        
    )
}

export default Cockpit