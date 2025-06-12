export interface LoginPayload {
  email: string;
  password: string;
}

export interface ForgotPayload {
  email: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  agree: true;
}