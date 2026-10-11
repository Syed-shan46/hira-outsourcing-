import axios from 'axios';

// Defaults to production CRM API (hiracrm.in/api)
// Can be customized via VITE_CRM_API_URL if needed
const CRM_API_URL = import.meta.env.VITE_CRM_API_URL || 'https://hiracrm.in/api';

const api = axios.create({
  baseURL: CRM_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const trackingAPI = {
  getByToken: (token: string) => api.get(`/tracking/${token}`),
  subscribeNotification: (data: any) => api.post('/tracking/notifications/subscribe', data),
};
