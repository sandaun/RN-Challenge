import axios from 'axios';
import { Doc } from '../ts/interfaces';

const documentsApi = () => {
  const docs = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const getInfo = async (): Promise<Doc[] | undefined> => {
    try {
      const response = await docs.get<Doc[]>(`/documents`);
  
      return response.data;

    } catch (error) {
      console.warn('Get Documents Error:', error)
    }
  };

  return {getInfo};
};

export default documentsApi;
