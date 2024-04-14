import axios from 'axios';

export const getSabores = async () => {
  try {
    const apiUrl = 'https://preapi.aquaforce.cl/api/sabores';
    const response = await axios.get(apiUrl);
    return response.data.sabores;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
