import axios from 'axios';

const url = 'https://api.nasa.gov/neo/rest/v1/neo/';

const http = axios.create({baseURL: url});

export default http;