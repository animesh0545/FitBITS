import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const workoutService = {
  async getWorkouts() {
    const response = await axios.get(`${API_URL}/workouts/`);
    return response.data;
  },

  async getWorkout(id) {
    const response = await axios.get(`${API_URL}/workouts/${id}/`);
    return response.data;
  },

  async createWorkout(workout) {
    const response = await axios.post(`${API_URL}/workouts/`, workout);
    return response.data;
  },

  async updateWorkout(id, workout) {
    const response = await axios.put(`${API_URL}/workouts/${id}/`, workout);
    return response.data;
  },

  async deleteWorkout(id) {
    await axios.delete(`${API_URL}/workouts/${id}/`);
  },
};

export default workoutService; 