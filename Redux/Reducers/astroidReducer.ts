import { Action } from "redux";

const initialState = {
	astroid: {
		name: '',
		nasa_jpl_url: '',
		is_potentially_hazardous_asteroid: ''
	}
}
export default (state = initialState, action:any) => () => {
switch(action.type) {
	case 'Random_Astroid': 
	return {...state, astroid: action.payload}
}
}