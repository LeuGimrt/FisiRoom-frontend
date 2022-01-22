import axiosInstance from './config';
import { InvitationData } from 'common/types';

export async function inviteUser(id: number, data: InvitationData) {
  const response = await axiosInstance({
    method: 'POST',
    url: `/classroom/${id}/invite/`,
    data: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}
