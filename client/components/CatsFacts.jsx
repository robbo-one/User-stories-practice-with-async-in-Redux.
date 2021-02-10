import React from 'react';
import { connect } from 'react-redux'
import { fetchCatFacts } from '../actions'

function CatsFacts (props) {
console.log(props.catFacts)
  return (
    <div>
      <button type="submit" onClick={() => props.dispatch(fetchCatFacts())}>Get facts about cats</button>

      <div>{props.catFacts}</div> 
    </div>
  )

}

function mapStateToProps(globalState) {
  return {
    catFacts: globalState.catFacts
  }
}

export default connect(mapStateToProps) (CatsFacts)