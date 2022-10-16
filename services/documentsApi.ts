import axios from 'axios';
import { Doc } from '../ts/interfaces';

const documentsApi = () => {
  const docs = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const getInfo = async (): Promise<Doc[]> => {
    const response = await docs.get(`/documents`);

    return response.data;
  };

  return {getInfo};
};

export default documentsApi;
