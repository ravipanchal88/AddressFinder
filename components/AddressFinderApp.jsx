import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Findaddress } from '../actions'
import AddressFinder from './AddressFinder'

const mapStateToProps = (state, ownProps) => ({
	addresses: state.addresses
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleAddressSearch: (e) => dispatch(Findaddress(dispatch, e.target.value))
})

const AddressFinderApp = connect(mapStateToProps, mapDispatchToProps)(AddressFinder)

export default AddressFinderApp
