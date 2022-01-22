import axiosInstance from './config';

export async function enrollUser(id: string) {
  const response = await axiosInstance({
    method: 'POST',
    url: `/classroom/${id}/enroll/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
