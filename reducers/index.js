

import {FINDADDRESS} from '../actions'
import axios from 'axios'
const initialState = {
	isLoading: false,
	addresses: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FINDADDRESS:
			return {...state, isLoading: true}
		case 'SUCCESS_RESULTS':
			return {...state, addresses: action.addresses}
		default:
			return state;
	}
}