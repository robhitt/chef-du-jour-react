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

      <div className="create-user-photo">
        <div>.</div>
        <div className="horizontal-helper">
          <div className="centered-main">


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
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon">$</div>
                    <input type="number" min="1" max="500" placeholder="Total Price of Experience" className="form-control" ref="price"/>
                  </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="length">Length:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="length" placeholder="Enter Number Hours of this Dining Experience"/>
                  </div>
                </div>

                <div className="form-group">
                  <div className="control-label col-sm-2"></div>
                  <div className="col-sm-10">
                    <button className="btn btn-success btn-lg btn-block button-color-scheme" type="submit">Submit</button>
                  </div>
                  </div>

              </form>

          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createDiningExperience}, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateDiningExperience)
