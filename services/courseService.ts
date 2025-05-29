import axios from 'axios';

export interface Courses {
  id: string;
  title: string;
  content: string;
  image: string;
  videoLink: string;
  teacherName: string;
}

export const getCourses = async (): Promise<Courses[]> => {
  try {
    const response = await axios.get<Courses[]>('http://localhost:3000/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }finally {
    console.log('Courses fetched successfully');
  }
};