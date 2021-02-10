import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {getRandomDog} from '../actions/index'

function Dog (props) {
  return(
    <>
      <button type='button' onClick={() => props.dispatch(getRandomDog())}>
        Get a dog
      </button>
      <img src={props.dog} alt='dog'/>
    </>
  )
}


function mapStateToProps(state) {
  return{
    dog: state.dog
  }
}


export default connect(mapStateToProps)(Dog)