import axios from 'axios';

 // export const API_URL = 'http://127.0.0.1:8000/api';
 // export const API_UR = 'http://127.0.0.1:8000';

export const API_URL = 'http://api.seedbc.net/api';
export const API_UR = 'http://api.seedbc.net';

export const request = axios.create({
	baseURL 		: API_UR,
	responseType 	: 'json'
});

export const api = () => {

	let token = localStorage.getItem('session_token_maxicom');

	token = JSON.parse(token);

	let AuthorizationToken = token.token_type+" "+token.access_token;

	return axios.create({
		baseURL 		: API_URL,
		responseType 	: 'json',
		headers 		: {'Authorization': AuthorizationToken }
	});

}