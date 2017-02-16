import React, {Component} from 'react'

export default class UserShow extends Component {
  // constructor() {
  //     super()
  // }

  render(){
    return(
      <div><h2> UserShow </h2>
      {this.props.children}
      </div>
    )
  }
}
