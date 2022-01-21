import axiosInstance from './config';

export async function deleteCourse(id: number) {
  const response = await axiosInstance({
    method: 'DELETE',
    url: `/classroom/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
