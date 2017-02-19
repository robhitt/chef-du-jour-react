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
       <Link to='/user/create-dining-experience' className="btn btn-default"><span className="glyphicon glyphicon-cutlery"/> Create a Dining Experience</Link>
       <div className="well well-sm"><span className="badge">{myDiningExperiences.length}</span> Bookable Dining Experiences</div>
       <div className="ui cards">
         {myDiningExperiences.map((my_dining_experience) => {
           return(
             <div className="card" key={my_dining_experience.id}>
               <div className="content">
                 <div className="header" key={my_dining_experience.id}>
                  <h5>{ my_dining_experience.title }</h5>
                 <div className="description">{my_dining_experience.description}</div>
               </div>
              <div>
               <Link to={`/dining_experiences/${my_dining_experience.id}`}>< button type="button" className="ui bottom attached btn btn-default">Preview</button></Link>
               <Link to={`/manage/${my_dining_experience.id}`}>< button type="button" className="ui bottom attached btn btn-default">Edit</button></Link>
              </div>
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
