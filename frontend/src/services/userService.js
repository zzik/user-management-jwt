import axios from "axios";

export const fetchProfile = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.get('http://localhost:5000/api/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data
    } catch (error) {
      console.error(error);
    }
  };
  