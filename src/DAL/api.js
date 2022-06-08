import axios from "axios";

// creating axios instance 
const ax = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true, 
  headers: { "API-KEY": "6b7a2ee6-5812-4e51-928d-79cce3737926" }
});

export const authAPI = {
  me: () => ax.get(`/auth/me`).then(r => r.data),
}

export const usersAPI = {
  getUsers: (page, count)  => ax.get(`users?page=${page}&count=${count}`).then(r => r.data),
  follow: (id) => ax.post(`/follow/${id}`).then((r) => r.data),
  unfollow: (id) => ax.delete(`/follow/${id}`).then((r) => r.data),
}

export const profileAPI = {
  getProfile: (userID)  => ax.get(`/profile/${userID || 24054}`).then(r => r.data),
  getStatus:  (userID)  => ax.get(`/profile/status/${userID || 24054}`).then(r => r.data),
  updateStatus: (status)  => ax.put(`/profile/status/`, { status }).then(r => r.data), 
}

export const apiGetUsers   = usersAPI.getUsers;
export const apiGetProfile = profileAPI.getProfile;
export const apiFollow     = usersAPI.follow;
export const apiUnFollow   = usersAPI.unfollow;
export const apiGetStatus   = profileAPI.getStatus;
export const apiUpdateStatus = profileAPI.updateStatus;
// refactor that ↑



