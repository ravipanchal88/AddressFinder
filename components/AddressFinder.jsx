
import React, { PropTypes, Component } from 'react'

const AddressFinder = ({ addresses, handleAddressSearch }) => {
	return (
		<div>
			<h1> Find Address </h1>
			<input className='form-control' type='text' onChange={handleAddressSearch}/>
			<h4>Search Results: </h4>
			{console.log("addresses:", addresses)}
			{addresses.map(one => <div key={one.formatted_address}>{one.formatted_address}</div>)}
		</div>
	)
}

export default AddressFinder
