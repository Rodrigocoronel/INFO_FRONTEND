const initialState =
{
    data: [],
    saving: false,
    usuarios:[],
};

export default (state = initialState, action) => {
    switch(action.type)
    {
        case 'CLIENTE_SAVE':
            return {
                ...state,
                saving: true
            }

        case 'CLIENTE_SAVE_SUCCESS':
            return {
                ...state,
                saving: false,
                data: [...state.data, action.payload]
            }

              case 'USUARIO_SAVE_SUCCESS':
            return {
                ...state,
                saving: false,
                usuarios: [...state.usuarios, action.payload]
            }

        case 'CLIENTE_LIST':
            return {
                ...state,
                data: action.payload
            }
             case 'USUARIOS_LIST':
            return {
                ...state,
                usuarios: action.payload
            }
        case 'CLIENTE_UPDATE_SUCCESS':
            let newp = action.payload;
            return {
                ...state,
                saving: false,
                data: state.data.map((d, i) => { return (d.value == newp.value) ? newp : d })
            }
            break;

        default:
            return state;
    }
};