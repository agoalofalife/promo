import {ADD_TOKEN, REMOVE_TOKEN, LOAD_AUTH} from './../actions/constants'

const storeAuth = {
 token:null,
 isAuth:false,
 load:false
};

export default (state = storeAuth, action) => {
    switch (action.type) {
        case ADD_TOKEN:
        	return {
            isAuth:true,
    		token: action.isAuth
        	};
        case REMOVE_TOKEN:
            return {...state,
    		token: null
        	};
        case LOAD_AUTH:
            return {
                ...state,
                load:action.load
            };
        default:
            return state;
    }
};