import { get, post } from './helpers';

const getUser = async (userId: string) => {
    console.log('Get User: ', userId);
    return get(`http://localhost:5000/api/user/${userId}`);
};

const createUser = async (userId: string) => {
    return post(`http://localhost:5000/api/user`);
};

export default {
    getUser,
    createUser,
};
