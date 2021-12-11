export type Curso = {
  id: number;
  nombre: string;
  picture: string;
  description: string;
};

export type TokenUser = {
  token: string;
};

export type User = {
  firstname: string;
  lastname: string;
  email: string;
};

export type Input = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
};
