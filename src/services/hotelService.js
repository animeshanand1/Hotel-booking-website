// This service will handle all API calls related to hotels 
import axios from 'axios';
const baseUrl = 'http://localhost:5500/api';
export const fetchHotels = async (params = {}) => {
    try {
        const response = await axios.get(`${baseUrl}/hotels`, { params });
        return response.data
    } catch (error) {
        if (error.response?.data?.message) {
            throw new Error(error.response.data.message);
        } else if (error.message) {
            throw new Error('Network error: ' + error.message);
        } else {
            throw new Error('Unknown error occurred while fetching hotels.');
        }
    }
}

export const getHotelById=async(id)=>{
    try {
        const response = await axios.get(`${baseUrl}/hotels/${id}`);
        return response.data;
    } catch (error) {
        if (error.response?.data?.message) {
            throw new Error(error.response.data.message);
        } else if (error.message) {
            throw new Error('Network error: ' + error.message);
        } else {
            throw new Error('Unknown error occurred while fetching hotel details.');
        }
    }
}