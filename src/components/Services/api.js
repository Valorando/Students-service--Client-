import axios from 'axios';

const BASE_URL = 'http://www.localhost:5158/api/Student'; 

export const getStudent = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting student:', error);
        throw error;
    }
};

export const postStudent = async (id, personal_Number, group_Name, student_Last_Name, student_First_Name, student_Patronymic_Name) => {
    try {
        const response = await axios.post(`${BASE_URL}`, { id, personal_Number, group_Name, student_Last_Name, student_First_Name, student_Patronymic_Name });
        return response.data;
    } catch (error) {
        console.error('Error posting student:', error);
        throw error;
    }
};

export const editStudent = async (id, personal_Number, group_Name, student_Last_Name, student_First_Name, student_Patronymic_Name) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { personal_Number, group_Name, student_Last_Name, student_First_Name, student_Patronymic_Name });
        return response.data;
    } catch (error) {
        console.error('Error editing student:', error);
        throw error;
    }
};

export const deleteStudent = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting student:', error);
    }
};


