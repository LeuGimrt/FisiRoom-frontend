import axiosInstance from './config';

export async function getMaterial(courseId: string, temaId: string) {
  const response = await axiosInstance({
    method: 'GET',
    url: `/classroom/${courseId}/posts/${temaId}/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
