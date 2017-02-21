import React, { Component } from 'react'
import { diningExperienceShow } from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'


class DiningExperienceShow extends Component {
  constructor(props) {
      super(props)
    }

    componentDidMount(prop){

      let diningExperienceId = this.props.params.id
            this.props.diningExperienceShow(diningExperienceId)
    }


  render(){
    // const foodImage = if (this.props.diningExperience) {
    //    return <img src={this.props.diningExperience.signature_dishes[0].image_url} />
    //  }

    if (this.props.diningExperience === []){
      return(
        <div>Loading...</div>
      )

    } else {

    return(

     <div>
       {/* { foodImage } */}

       <h2>{this.props.diningExperience.title}</h2>
       <h4>Price:</h4>
       <p>{this.props.diningExperience.price}</p>
       <h4>Length: </h4>
       <p>{this.props.diningExperience.length} hours</p>
       <h4>Description: </h4>
       <p>{this.props.diningExperience.description}</p>
     </div>
   )}
 }
 }

function mapDispatchToProps(dispatch) {
  // return {
  //   showUser: function(id){
  //     let action = showUser(id)
  //     dispatch(action)
  //   }
  // }
  return bindActionCreators({ diningExperienceShow }, dispatch)
}

function mapStateToProps(state){
  return {diningExperience: state.diningExperiences}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiningExperienceShow)
