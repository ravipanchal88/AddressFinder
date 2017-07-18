
import axios from 'axios'
export const FINDADDRESS = 'FINDADDRESS';


//Action to make an API call to Google for Searching an Address
export function Findaddress(dispatch,searchQuery){
	axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${searchQuery}`)
	.then(response => {
		console.log('response:', response);
		dispatch(successResults(response.data.results))
	})
		return{
			type:FINDADDRESS,
			searchQuery:searchQuery
		};
}

function successResults(results) {
  return({
    type: 'SUCCESS_RESULTS',
    addresses: results
  })
}




