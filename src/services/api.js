import axios from "axios";

const API_BASE_URL = "https://job-tracker-production-fe66.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getJobs = () => api.get("/jobs");
export const createJob = (job) => api.post("/jobs", job);
export const updateJobStatus = (id, status) =>
  api.put(`/jobs/${id}/status`, { status });
export const deleteJob = (id) => api.delete(`/jobs/${id}`);

export default api;
