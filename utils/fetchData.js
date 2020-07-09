const axios = require('axios');
const fetchData = async () => {
	return axios.get('http://localhost:3001');
};

exports.fetchData = fetchData;
