import axios from "axios";

const baseDomain ="http://127.0.0.1:8000";

export const customHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export const apiUrl = `${baseDomain}`;

export default axios.create({
  apiUrl,
  headers: customHeaders
});


