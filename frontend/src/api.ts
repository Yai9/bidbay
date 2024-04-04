import axios from "axios";

const http = axios.create({
  baseURL: process.env.API_ENDPOINT,
});

export const postData = async (url: string, body: {}) => {
  const { data } = await http.post(url, body);
  return data;
};
