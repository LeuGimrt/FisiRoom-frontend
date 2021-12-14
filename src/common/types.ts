export type Curso = {
  category: number;
  day: string;
  day_of_the_week: string;
  description: string;
  id: number;
  owner: number;
  owner_name: string;
  time_end: string;
  time_start: string;
  title: string;
};

export type TokenUser = {
  token: string;
};

export type User = {
  firstname: string;
  lastname: string;
  email: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type NewUser = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type Input = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
};
