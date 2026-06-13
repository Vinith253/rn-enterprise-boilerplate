import {request} from '@services/api/request';
import {API_ENDPOINTS} from '@services/api/endpoints';

export const getUsers = () =>
  request.get(
    API_ENDPOINTS.USERS,
  );