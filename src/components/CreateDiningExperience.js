import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createDiningExperience} from '../actions/index'

export default class CreateDiningExperience extends Component {
  constructor (){
    super()
    this.handleSumbit = this.handleSubmit.bind(this)
  }

handleSubmit(event){
  event.preventDefault()

}

  render(){
    return(
      <div className="container">
        <h2> Create a Dining Experience </h2>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="Description">Description:</label>
            <div className="col-sm-10">
              <textarea className="form-control" ref="first_name" placeholder="This is a wonderful dining experience." />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="price">Price:</label>
            <div className="col-sm-10">
              <input type="number" min="1" max="500" className="form-control" ref="price"/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="length">Length:</label>
            <div className="col-sm-10">
              <input className="form-control" ref="length"/>
            </div>
          </div>


        </form>
      </div>
    )
  }


}
