import axios from 'axios';
import {toast} from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;
  
    if (!expectedError) {
      console.log("logging the error", error);
      toast.error("unexpected error happens");
    }
  });

  export default {
      get: axios.get,
      put: axios.put,
      post: axios.post,
      delete: axios.delete,
      patch: axios.patch,
  };