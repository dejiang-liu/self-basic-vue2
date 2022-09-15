import * as API from '@/utils/request';

export const login = (data) => {
  return API.POST('local/login', data)
}