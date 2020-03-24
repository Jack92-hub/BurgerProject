import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-burger-project-jav.firebaseio.com/'
});

export default instance;