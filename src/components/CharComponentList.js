import React from 'react';
import { Row } from 'react-bootstrap'
import CharComponent from './CharComponent'


export class CharComponentList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      charList: []
    }
  }

  componentDidMount() {
    this.setState({
      charList: this.props.charList
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      charList: nextProps.charList
    })
  }

  render() {
    return (
        <Row>
          {this.state.charList.map((data, index) => {
            return(
              <CharComponent key={index} char={data} onClick={this.props.onclick} index={index}/>
            )
            })}
        </Row>
    );
  }
}

export default CharComponentList;