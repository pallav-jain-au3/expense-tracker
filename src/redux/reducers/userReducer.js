//import {} from '../types';
const initialState = {
	user : null,
	loading: false,
	errors:null,
	authenticated : false
}
export default function (state = initialState, action){
	switch(action.type){
		default :
			return state;
	}
}