import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createDiningExperience} from '../actions/index'

class CreateDiningExperience extends Component {
  constructor (){
    super()
    // this.handleSumbit = this.handleSubmit.bind(this)
  }

handleSubmit(event){
    event.preventDefault()

  const createDiningExperienceParams = {
    title: this.refs.title.value,
    description: this.refs.description.value,
    price: this.refs.price.value,
    length: this.refs.length.value
  }
  this.props.createDiningExperience(createDiningExperienceParams)
  // this.props.fetchDiningExperiences(this.props.user.id)
}

  render(){
    return(
      <div className="container">
        <h2> Create a Dining Experience </h2>
        <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="title">Title:</label>
          <div className="col-sm-10">
            <textarea className="form-control" ref="title" placeholder="Enter a Creative Title" />
          </div>
        </div>


          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="description">Description:</label>
            <div className="col-sm-10">
              <textarea className="form-control" ref="description" placeholder="This is a wonderful dining experience." />
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

          <div className="form-group">
            <div className="control-label col-sm-2"></div>
            <div className="col-sm-10">
              <button className="btn btn-success btn-lg btn-block" type="submit">Submit</button>
            </div>
            </div>

        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createDiningExperience}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateDiningExperience)
