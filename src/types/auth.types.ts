export type UserRole = 'admin' | 'user' | 'guest';

export interface User {
  email: string;
  password: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  cookies: Array<{
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: 'Strict' | 'Lax' | 'None';
  }>;
  origins: Array<{
    origin: string;
    localStorage: Array<{
      name: string;
      value: string;
    }>;
  }>;
}
