import axios from "axios";

// creating axios instance 
const ax = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true, 
  headers: { "API-KEY": "6b7a2ee6-5812-4e51-928d-79cce3737926" }
});

export const apiGetUsers   = (page, count)  => ax.get(`users?page=${page}&count=${count}`).then(r => r.data);
export const apiGetProfile = (userID)       => ax.get(`/profile/${userID || 2}`).then(r => r.data);
export const apiFollow     = (id)           => ax.post(`/follow/${id}`).then((r) => r.data);
export const apiUnFollow   = (id)           => ax.delete(`/follow/${id}`).then((r) => r.data);
export const apiAuthMe     = ()             => ax.get(`/auth/me`).then(r => r.data);



