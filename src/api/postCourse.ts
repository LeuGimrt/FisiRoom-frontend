import axiosInstance from './config';
import { CourseData } from 'common/types';

export async function postCourse(data: CourseData) {
  const response = await axiosInstance({
    method: 'POST',
    url: '/classroom/',
    data: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
