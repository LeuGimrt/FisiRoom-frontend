import axiosInstance from './config';

export async function getCourseTopics(id: string) {
  const response = await axiosInstance({
    method: 'GET',
    url: `/classroom/${id}/posts/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
