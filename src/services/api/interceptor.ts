import {apiClient} from './client';

apiClient.interceptors.request.use(
  async config => {
    console.log(
      '[API REQUEST]',
      config.url,
    );

    return config;
  },

  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,

  async error => {
    console.log(
      '[API ERROR]',
      error.response,
    );

    if (
      error.response?.status ===
      401
    ) {
      console.log(
        'Unauthorized',
      );
    }

    return Promise.reject(error);
  },
);