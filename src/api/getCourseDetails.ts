import axiosInstance from './config';

export async function getCourseDetails(id: string) {
  console.log('awa');

  const response = await axiosInstance({
    method: 'GET',
    url: `/classroom/${id}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });

  console.log('termino el request');

  return response;
}
