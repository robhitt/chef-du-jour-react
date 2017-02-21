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
         <div className="container">
           <div className="row panel panel-default">
             <div>
               <Link to='/user/create-dining-experience' className="btn btn-default"><span className="glyphicon glyphicon-cutlery"/> Create a Dining Experience</Link>
             </div>
             <div>
               <div className="btn btn-default">
                 <span className="badge">{myDiningExperiences.length}</span> Bookable Dining Experiences
               </div>
             </div>
           </div>

           <div className="row">
             {myDiningExperiences.map((my_dining_experience) => {
               return(
                 <div className="col-sm-6 col-md-4" key={my_dining_experience.id}>
                   <div className="thumbnail">
                     <img src="http://i63.tinypic.com/1z68sbk.jpg" alt="tiny chef"/>
                     <div className="caption" key={my_dining_experience.id}>
                       <h5>{ my_dining_experience.title }</h5>
                       <div className="description">{my_dining_experience.description}</div></div>
                     <div>
                       <Link to={`/dining_experiences/${my_dining_experience.id}`}><button type="button" className="ui bottom attached btn btn-info button-separator">Preview</button></Link>
                       <Link to={`/manage/${my_dining_experience.id}`}><button type="button" className="ui bottom attached btn btn-primary pull-right">Edit</button></Link></div>

               </div>
             </div>)}
         )} </div>
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
