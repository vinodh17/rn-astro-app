import { Dispatch } from "redux";
import http from "../../utils/http"

const key = '0khfGRwp0LSebQWThBPPyoPwWqcFjdgbchzCUhoS';

export const searchById = (inp: string, navigation: any) => (dispatch:any) => {
	console.log(inp+ '1234567');
	return http.get(`${inp}?api_key=${key}`)
	.then(res => {
		console.log(res);
		
		dispatch({type: 'Random_Astroid', payload: res.data})
		navigation.navigate('Details', res.data);
	})
	.catch(error => {
		alert(error)
	})
}

export const getRandomAstroid = (navigation:any) => (dispatch:Dispatch) => {
	console.log('INPUT');
	
	return http.get(`browse?api_key=${key}`)
	.then(response=> { 
		// const randomId = response.data.near_earth_objects
		// [Math.floor(Math.random() * response.data.near_earth_objects.lengh)].id;
		const randomAstroidId = response.data.near_earth_objects[Math.floor(Math.random() * response.data.near_earth_objects.length)].id
		console.log(randomAstroidId);
		

		// console.log(response.data.near_earth_objects);
		http.get(`https://api.nasa.gov/neo/rest/v1/neo/${randomAstroidId}?api_key=${key}`)
		.then(resp => {
			console.log(resp.data);
			navigation.navigate('Details', resp.data)
			dispatch({type: 'Random_Astroid', payload: resp.data});
		}
		)
	});
}