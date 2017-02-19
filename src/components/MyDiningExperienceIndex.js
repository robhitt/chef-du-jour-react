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
     <Link to='/user/create-dining-experience'>< button type="button" class="btn btn-default">Create a Dining Experience</button></Link>
      <h2>Your Bookable Dining Experiences</h2>
        <div className="row">
        {myDiningExperiences.map((my_dining_experience) => {
          return(
            <div key={my_dining_experience.id}>
                  <h5>{ my_dining_experience.title }</h5>
                    <p>{my_dining_experience.description}</p><br/>
                    <Link to={`/dining_experiences/${my_dining_experience.id}`}>< button type="button" className="btn btn-default">Preview</button></Link>
                    <Link to={`/manage/${my_dining_experience.id}`}>< button type="button" className="btn btn-default">Edit</button></Link>
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
