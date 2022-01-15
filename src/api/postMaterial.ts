import axiosInstance from './config';
import { newMaterial } from 'common/types';

export async function postMaterial(id: string, data: newMaterial) {
  const form = new FormData();

  for (const [key, value] of Object.entries(data)) {
    form.append(key, value);
  }

  const response = await axiosInstance({
    method: 'POST',
    url: `/classroom/${id}/posts/`,
    data: form,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
