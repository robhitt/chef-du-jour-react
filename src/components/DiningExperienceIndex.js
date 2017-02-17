import React, { Component } from 'react'
import { fetchMyDiningExperiences } from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

 class MyDiningExperiences extends Component{
  constructor() {
      super()
    }

    componentDidMount(props){
      this.props.fetchMyDiningExperiences(parseInt(this.props.params.id))
    }


  render(){

    const myDiningExperiences= this.props.myDiningExperiences
    return(
     <div>
      <h2>Your Bookable Dining Experiences</h2>
        <div className="row">
        {myDiningExperiences.map((my_dining_experience, i) => {
          return(
            <div>
                  <h5 key={i}>{ my_dining_experience.title }</h5>
                    <p>{my_dining_experience.description}</p><br/>
            </div>
          )
        }
      )}
     </div>
    </div>
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
  return bindActionCreators({ fetchMyDiningExperiences }, dispatch)
}

function mapStateToProps(state){
  return {myDiningExperiences: state.myDiningExperiences}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDiningExperiences)
