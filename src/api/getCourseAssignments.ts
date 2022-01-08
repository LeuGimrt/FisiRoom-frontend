import axiosInstance from './config';

export async function getCourseAssignments(id: string) {
  const response = await axiosInstance({
    method: 'GET',
    url: `/classroom/${id}/assignments/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
