import axiosInstance from './config';

export async function getCourseDetails(id: string) {
  const response = await axiosInstance({
    method: 'GET',
    url: `/classroom/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });

  return response;
}
