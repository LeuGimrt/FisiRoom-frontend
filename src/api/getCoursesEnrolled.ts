import axiosInstance from './config';

export async function getCoursesEnrolled() {
  const response = await axiosInstance({
    method: 'GET',
    url: '/courses/enrolled/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
