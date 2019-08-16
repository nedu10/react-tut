import React, {Component} from 'react';
import './App.css';
import PersonFunction from './Components/PersonFunction/PersonFunction'


class App extends Component {
  state = {
    data: [
      {id: 'terwtwew2343',name:'chinedu', age:22},
      {id: 'terwt2332ww',name: 'milliscent', age:20},
      {id: 'terwt343ef3',name: 'sammieblaq', age: 21}
    ],
    showCard: false
  }

  //component functions
  switchHandler = () => {
    //Dont do dis this.state.data[0] = {name: 'nedu', age: 23}

    //Note setState can also look like this ....   this.setState(data[{name:'frack', age: 34}])

    this.setState(state => {
      return state.data[0].name="nedu"
    })
  }

  toggleCardHandler = () => {
    const show_card = this.state.showCard
    // console.log(show_card)
    this.setState({
      showCard: !show_card
    })
  }

  deleteDataHandler = (index) => {
    // console.log(' i am hererrrertet >> ', index)
    // const data = this.state.data.splice(index, 1)  Dont do this bcos u dont mutate a state directly
    const data = [...this.state.data]
    data.splice(index,1)
    this.setState({data: data})
  }

  changeNameHandler = (e, componentEvent) => {
    // e.preventDefault()
    // console.log('event', e, componentEvent)
    const eachData = {...this.state.data[e]}
    // console.log('event', eachData)
    eachData.name = componentEvent
    const newChangeData = [...this.state.data]
    newChangeData.splice(e, 1, eachData);
    this.setState({data: newChangeData})
    // this.setState(prevState =>  prevState.data[2].name = e
// )
  }
  //End of component functions

  render() {  //  react calls the render method anytime the state is to be updated

    // ading inline styling
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '8px',
      margin: '16px',
      cursor: "pointer",
      
    }
    
    const styleDiv = {
      width: '60%',
      margin: 'auto'
    }

    // end of adding inline styling

    return (
    <div className="App">
      <h1>Hello</h1>
      <div style= {styleDiv} >
        <button style={style} onClick={this.toggleCardHandler} >Show Card</button>
        <button style={style} onClick= {this.switchHandler}>Switch Properties</button>
      </div>

      {
        this.state.showCard ? 
        <div>
        {this.state.data.map((each_data, index) => {
          return <PersonFunction
          name={each_data.name}
          click={() => this.deleteDataHandler(index)} 
          age={each_data.age}
          // onClick= {(index) => this.deleteDataHandler(index)}
          changed={(componentEvent) => this.changeNameHandler(index, componentEvent)}
          key = {each_data.id}
          />
        })}
        {/* <PersonFunction
          name={this.state.data[0].name}
          age={this.state.data[0].age}
          />
        <PersonFunction 
          name={this.state.data[1].name} 
          click={this.switchHandler} 
          age={this.state.data[1].age}
          >Ya!! He is really correct
        </PersonFunction>
        <PersonFunction 
        name={this.state.data[2].name} 
        age={this.state.data[2].age}
        changed={this.changeNameHandler.bind(this)}
        /> */}
      </div> : null
      }
    </div>
  );
  }
}

export default App;
