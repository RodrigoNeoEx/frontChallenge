import axios from 'axios';

export const get = async (baseURL: string, erro: string) => { 
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw new Error(erro);
  }
};
