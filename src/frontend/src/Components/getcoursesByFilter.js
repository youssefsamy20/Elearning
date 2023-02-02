// import axios from 'axios';

// export const START_LOADING = 'START_LOADING';
// export const STOP_LOADING = 'STOP_LOADING';
// export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';
// export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
// export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
// export const GET_NEW_ARRIVALS = 'GET_NEW_ARRIVALS';
// export const CREATE_PRODUCT = 'CREATE_PRODUCT';
// export const GET_PRODUCTS = 'GET_PRODUCTS';
// export const GET_COURSES = 'GET_COURSES';



// export const getcoursesByFilter = arg => async dispatch => {
// 	try {
// 		const response = await axios.post('../api/filter/search', arg);

// 		dispatch({
// 			type: GET_COURSES,
// 			payload: response.data.courses,
// 		});
// 	} catch (err) {
// 		console.log('getcoursesByFilter api error: ', err);
// 		dispatch({ type: STOP_LOADING });
// 		dispatch({
// 			type: SHOW_ERROR_MESSAGE,
// 			payload: err.response.data.errorMessage,
// 		});
//     }}
//     export default getcoursesByFilter;