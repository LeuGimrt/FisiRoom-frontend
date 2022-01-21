import axiosInstance from './config';
import { CourseData } from 'common/types';

export async function postCourse(data: CourseData) {
  const form = new FormData();

  for (const [key, value] of Object.entries(data)) {
    form.append(key, value);
  }

  const response = await axiosInstance({
    method: 'POST',
    url: '/classroom/',
    data: form,
    headers: {
      'Content-Type': `multipart/form-data`,
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
