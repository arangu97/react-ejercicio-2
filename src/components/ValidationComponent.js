import React from 'react';
import { Row } from 'react-bootstrap'


export class ValidationComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        text: 'Texto demasiado corto',
        style: 'alert alert-warning'
    }
  }

  componentWillReceiveProps(nextProps) {
      let text = (nextProps.text.length < 5) ? 'Texto demasiado corto' : 'Texto suficientemente largo';
      let style = (nextProps.text.length < 5) ? 'alert alert-warning' : 'alert alert-success'
      this.setState({
          text: text,
          style: style
      })
  }

  render() {
    return (
      <Row>
        <div className={this.state.style} role="alert">
            {this.state.text}
        </div>
      </Row> 
    );
  }
}

export default ValidationComponent;