import axios from 'axios';

export interface Courses {
  id: string;
  title: string;
  content: string;
  image: string;
  videoLink: string;
  teacherName: string;
}

const URL = 'http://localhost:3000/courses'

export const getCourses = async (): Promise<Courses[]> => {
  try {
    const response = await axios.get<Courses[]>(`${URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }finally {
    console.log('Courses fetched successfully');
  }
};

export const putCourse = ({id, updatedData}:{id:string, updatedData: Courses}) => {
  return axios.put(`${URL}/${id}`, updatedData)
}

export const patchProgress = ({id, data}:{id:string, data: object}) => {
  return axios.patch(`${URL}/${id}`, data);
}