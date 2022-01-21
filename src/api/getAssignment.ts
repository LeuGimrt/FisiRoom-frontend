import axiosInstance from './config';

export async function getAssignment(courseId: string, assignId: string) {
  console.log('a');
  const response = await axiosInstance({
    method: 'GET',
    url: `/classroom/${courseId}/assignments/${assignId}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  console.log('a');
  return response;
}
