import axios from 'axios';
const PROJECT_NAME = 'firebase-app-name';

const API_BASE_URL = `https://us-central1-${PROJECT_NAME}.cloudfunctions.net`;

const axiosApiInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosApiInstance.interceptors.request.use(async config => {
  const requestConfig = config as any;
  // Update auth headers after introducing auth
  return requestConfig;
});

export default axiosApiInstance;
