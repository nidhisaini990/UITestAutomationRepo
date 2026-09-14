export const routes = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  reports: '/reports',
  settings: '/settings',
  users: '/users',
  profile: '/profile',
  logout: '/logout',
};

export const apiRoutes = {
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
  },
  users: {
    list: '/api/users',
    create: '/api/users',
    get: (id: string) => `/api/users/${id}`,
    update: (id: string) => `/api/users/${id}`,
    delete: (id: string) => `/api/users/${id}`,
  },
  reports: {
    list: '/api/reports',
    get: (id: string) => `/api/reports/${id}`,
  },
};
