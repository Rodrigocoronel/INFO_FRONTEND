import { combineReducers } from "redux";

import auth from "./auth.js";
import user from './user.js';

const reducers = combineReducers({
	auth,
		user,
});

export default reducers;