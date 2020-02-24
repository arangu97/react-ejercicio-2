import React from 'react';
import './CharComponent.css'


export class CharComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        char: ''
    }
  }

  componentDidMount(){
      this.setState({
          char: this.props.char
      })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
        char: nextProps.char
    })
  }

  render() {
    return (
        <div className='Char' onClick={() => this.props.onClick(this.props.index)}>
            <b>{this.state.char}</b>
        </div>
    );
  }
}

export default CharComponent;