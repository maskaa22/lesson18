import axios from 'axios';

const axiosInstance = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {}
});
const getPosts = () => axiosInstance('');
const getPost = (id) => axiosInstance('/' + `?userId=${id}`);

export {getPosts, getPost}