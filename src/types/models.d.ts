export type Classroom = {
  room_location: string;
};

export type Course = {
  title: string;
};

export type UserRegister = {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role: string;
  };
};

export type UserLogin = {
  user: {
    email: string;
    password: string;
  }
};

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
}
