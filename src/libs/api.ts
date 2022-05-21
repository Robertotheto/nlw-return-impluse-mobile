import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nlw-return-impulse-server-production-cded.up.railway.app',
})