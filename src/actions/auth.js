import { request, api  } from './_request';

// export const checktoken = () =>
// {
//     return (dispatch) => {

//         let token = localStorage.getItem('session_token_maxicom');

//         token = JSON.parse(token);

//         if(token !== null)
//         {
//             let AuthorizationToken = token.token_type+" "+token.access_token;

//             request.get('api/user',
//             {
//                 responseType: 'json',
//                 headers: {'Authorization': AuthorizationToken}
//             })
//             .then(function(response) {
//                 if(response.status === 200)
//                 {
//                     dispatch(
//                     {
//                         type: 'AUTH_SIGNIN_SUCCESS',
//                         payload: token
//                     });
//                 }
//                 else
//                 {
//                     // delete token
//                     localStorage.removeItem('session_token_maxicom');
//                 }

//             })
//             .catch(function(error) {
//                 // delete token
//                 localStorage.removeItem('session_token_maxicom');
//             });
//         }
//     }
// };

export const signin = (email, password) =>
{
    return (dispatch) => {

        dispatch(
                {
                    type: 'AUTH_SIGNIN_SUCCESS',
                   
                });


        // request.post('oauth/token', {
        //     username        : email,
        //     password        : password,
        //     client_id       : 2,
        //     client_secret   : 'fVjegXrgQ5wUMMP2TsVEQl1csjNww0X20j6rFsPz',
        //     grant_type      : 'password'
        // })
        //  .then(function(response)
        //  {
        //     if(response.status === 200)
        //     {
        //         localStorage.setItem('session_token_maxicom', JSON.stringify(response.data));

        //         dispatch(
        //         {
        //             type: 'AUTH_SIGNIN_SUCCESS',
        //             payload: response.data
        //         });
        //     }
        //     else
        //     {
        //         dispatch(
        //         {
        //             type: 'AUTH_SIGNIN_FAILURE',
        //             payload: 'Datos incorrectos.'
        //         });
        //     }
        //  })
        //  .catch(function(error)
        //  {
        //     dispatch(
        //     {
        //         type: 'AUTH_SIGNIN_FAILURE',
        //         payload: 'Datos incorrectos.'
        //     })
        //  });
    }
};

export const signout = () =>
{
    return (dispatch) => {

        // api().post('/logout')
        // .then(function(response)
        // {
        //     localStorage.removeItem('session_token_maxicom');
        //     dispatch(
        //     {
        //         type: 'AUTH_SIGNOUT_SUCCESS'
        //     })
        // });

    }
};

export const whoiam = () =>
{
    // return (dispatch) => {

    //     api().get('/user')
    //     .then(function(response)
    //     {
    //         dispatch(
    //         {
    //             type: 'AUTH_WHOIAM_SUCCESS',
    //             payload: response.data
    //         });
    //     });

    // }
};