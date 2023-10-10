export interface UserPayload {
  sub: number;
  name: string;
  email: string;
  admin: boolean;
  iat?: number;
  exp?: number;
}
