import axiosInstance from './config';

export async function getCourses() {
  const response = await axiosInstance({
    method: 'GET',
    url: '/courses/created/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
