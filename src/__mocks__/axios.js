import mockAxios from 'axios';
import {api} from '../api/api';

export default {
    get: jest.fn(()=> Promise.resolve({ data: {} }))
};
