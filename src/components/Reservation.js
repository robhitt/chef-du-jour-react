import React, {Component} from 'react'
import {Link} from 'react-router'
// import {Link} from 'react-router'

export default (props) => {
    if (props.reservations) {
      const availableListings = props.reservations
      return(
        <div>
          <h2> Reserve a Chef </h2>
          <div className="row">
            { availableListings.map((dining_experience, i) => {
              //if (dining_experience.status === 'available') {
              return(
                <div className="col-sm-6 col-md-4" key={i}>
                  <div className="thumbnail">
                    <img src="..." alt="..."/>
                    <div className="caption">
                      <Link to={`dining_experiences/${dining_experience.id}`} ><h3>{dining_experience.title }</h3></Link>

                      <p key={i}>{ dining_experience.description }</p>
                      <button id={ dining_experience.id } onClick={ props.handleClick } className="btn btn-primary">Reserve Me</button>
                    </div>
                  </div>
                </div>
              )
              //}
              }
          )}
          </div>
        </div>
      )
    } else {
      return <div>loading...</div>
    }
  }

