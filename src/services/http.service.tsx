import fetch from 'isomorphic-unfetch';

// axios.interceptors.response.use(null as any, error => {
// 	const expectedError =
// 		error.response && error.response.status >= 400 && error.response.status < 500;

// 	if (!expectedError) {
// 		console.log('Unexpected', error);
// 		alert('An unexpected error has occurred.');
// 	}

// 	return Promise.reject(error);
// });

// export default {
// 	get: axios.get,
// 	post: axios.post,
// 	put: axios.put,
// 	delete: axios.delete
// };
