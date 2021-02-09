import React from 'react'
import { connect } from 'react-redux'

function Pokemon ({ name, order, image }) {
  return (
    <>
      <h3>{name}</h3>
      <p>order: {order}</p>
      <img src={image} />
    </>
  )
}

function mapStateToProps (state) {
  return {
    pokemon: state.pokemon
  }
}

export default connect(
  mapStateToProps
)(Pokemon)