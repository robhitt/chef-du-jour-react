import React, { Component } from 'react'
import { diningExperienceShow } from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'


class DiningExperienceShow extends Component {
  constructor() {
      super()
    }

    componentDidMount(props){
      this.props.diningExperienceShow()
    }


  render(){
    return(
     <div>HELLO BUDDY</div>
   )
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
  return {diningExperience: state.diningExperience}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiningExperienceShow)
