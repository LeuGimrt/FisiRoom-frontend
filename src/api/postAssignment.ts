import axiosInstance from './config';
import { newAssignment } from 'common/types';

export async function postAssignment(id: string, data: newAssignment) {
  const form = new FormData();

  for (const [key, value] of Object.entries(data)) {
    form.append(key, value);
  }

  const response = await axiosInstance({
    method: 'POST',
    url: `/classroom/${id}/assignments/`,
    data: form,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
