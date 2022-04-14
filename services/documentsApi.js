import axios from 'axios';

const documentsApi = () => {
  const test = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const getInfo = async () => {
    const response = await test.get(`/documents`);

    return response.data;
  };

  return {getInfo};
};

export default documentsApi;
