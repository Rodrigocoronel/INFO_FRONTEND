import { api } from './_request';

 export const get = () => {
 	return (dispatch) => {

 		api().get('/select/users').then(function(response) {
			if(response.status === 200) {
				dispatch({
				type: 'CLIENTE_LIST',
					payload: response.data
 				});
			}
 		});

 	}
 };

 



export const update_usuario = (usuario, callback) => {
	return (dispatch) => {

        
		dispatch({ type: 'CLIENTE_SAVE' });

		api().post(`usuario/${usuario.id}`, usuario)
		.then(function(response)
		{
			if(response.status === 200)
			{
				dispatch({
					type: 'CLIENTE_UPDATE_SUCCESS',
					payload: response.data
				});

				if(typeof callback === 'function') callback();
			}
			else
			{
				dispatch({ type: 'PROSPECT_SAVE_FAILURE' });
			}
		})
		.catch(function(error) {
			dispatch({ type: 'PROSPECT_SAVE_FAILURE' });
		});

	}
};

export const save_usuario = (item, callback) => {
	return (dispatch) => {

		dispatch({ type: 'CLIENTE_SAVE' });

		api().post('usuario', item).then(function(response) {

			if(response.status === 200) {

console.log( response.data);
				dispatch({
					type: 'CLIENTE_SAVE_SUCCESS',
					payload: response.data
				});

				if(typeof callback === 'function') callback(response.data);

			}
			else{
				dispatch({ type: 'CLIENTE_SAVE_FAILURE' });
			}

		})
		.catch(function(error) {
			dispatch({ type: 'CLIENTE_SAVE_FAILURE' });
		});

	}
};