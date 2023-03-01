import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndPoint';

const makeRequest = async ({ url, method }, dynamicConfig, navigate) => {
  try {
    const response = await axios({
      baseURL: BACKEND_URL,
      url,
      method,
      ...dynamicConfig,
    });
    return response.data;
  } catch (error) {
    if (error.response.status) {
      navigate('/error');
    }
  }
};

export default makeRequest;
