import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import ValidationComponent from './components/ValidationComponent';
import CharComponentList from './components/CharComponentList';


export class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  textChangedHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  charClickedHandler = async (index) => {
    let newText = this.state.text.slice(0,index) + this.state.text.slice(index + 1);
    this.setState({
      text: newText
    })
  }

  render() {
    var text = Array.from(this.state.text)
    return (
      <div className="App">
        <Container style={{padding: 20}}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Introduce un texto:</label>
          <input type="email" className="form-control" value={this.state.text} id="exampleInputEmail1" onChange={this.textChangedHandler} placeholder="Texto" />
          <p> La longitud del texto introducido es <b>{this.state.text.length}</b></p>
        </div>
        <ValidationComponent text={this.state.text}/>
        <CharComponentList charList={text} onclick={this.charClickedHandler}/>
        </Container>
      </div>  
    );
  }



}

export default App;
