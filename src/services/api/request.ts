import {apiClient} from './client';

export const request = {
  get: async <T>(
    url: string,
    params?: object,
  ): Promise<T> => {
    const response =
      await apiClient.get(url, {
        params,
      });

    return response.data;
  },

  post: async <T>(
    url: string,
    body?: object,
  ): Promise<T> => {
    const response =
      await apiClient.post(
        url,
        body,
      );

    return response.data;
  },

  put: async <T>(
    url: string,
    body?: object,
  ): Promise<T> => {
    const response =
      await apiClient.put(
        url,
        body,
      );

    return response.data;
  },

  delete: async <T>(
    url: string,
  ): Promise<T> => {
    const response =
      await apiClient.delete(url);

    return response.data;
  },
};