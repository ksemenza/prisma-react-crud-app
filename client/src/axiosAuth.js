import axios from 'axios';
const axiosWithAuth = () => {
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTkwMzc1Mzc5LCJleHAiOjE1OTA5ODAxNzl9.AfOLclfKqz_NOjC_5QDO5mtBDBjjR2YcZOGhCBrOTlM"
  return axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
      "Authorization": token
    }
  });
};

export default axiosWithAuth