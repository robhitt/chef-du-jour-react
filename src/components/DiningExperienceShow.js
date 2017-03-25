import React, {Component} from 'react'
import {diningExperienceShow} from '../actions/index'
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
    let foodImage = (this.props.diningExperience.signature_dishes) ? <img className="div-image-width" src={this.props.diningExperience.signature_dishes[0].image_url} /> : <div></div>

    if (this.props.diningExperience === []){
      return(
        <div>Loading...</div>
      )

    } else {
    return(



     <div>
       {/* <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
         {/* <!-- Indicators -->
         <ol class="carousel-indicators">
         <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
         <li data-target="#carousel-example-generic" data-slide-to="1"></li>
         <li data-target="#carousel-example-generic" data-slide-to="2"></li>
         </ol>

         {/* <!-- Wrapper for slides -->
         <div class="carousel-inner" role="listbox">
         <div class="item active">
           <img src="..." alt="..."/>
           <div class="carousel-caption">
             ...
           </div>
         </div>
         <div class="item">
           <img src="..." alt="..."/>
           <div class="carousel-caption">
             ...
           </div>
         </div>
         ...
         </div>

         {/* <!-- Controls -->
         <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
         <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
         <span class="sr-only">Previous</span>
         </a>
         <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
         <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
         </a>
       </div> */}

       <div className="reservation-photo">
         <div>.</div>
         <div className="horizontal-helper">
           <div className="centered-main">
             <div>

               <h2>{this.props.diningExperience.title}</h2>

               <div className="list-group">

               <div className="row">
                 <div className="col-sm-2 list-group-item panel-no-border"><strong>Price:</strong></div>
                 <div className="col-sm-10 list-group-item panel-no-border">${this.props.diningExperience.price}</div>
                </div>

                <div className="row">
                  <div className="col-sm-2 list-group-item panel-no-border"><strong>Length</strong></div>
                  <div className="col-sm-10 list-group-item panel-no-border">{this.props.diningExperience.length}</div>
                </div>

                <div className="row">
                  <div className="col-sm-2 list-group-item panel-no-border"><strong>Description:</strong></div>
                  <div className="col-sm-10 list-group-item panel-no-border">{this.props.diningExperience.description}</div>
                </div>

                  <p className="list-group-item panel-no-border">{ foodImage }</p>
               </div>
             </div>
           </div>
         </div>

     </div>
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
