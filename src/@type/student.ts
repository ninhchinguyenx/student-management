export interface IStudent {
  id?: string;
  name: string;
  age: number;
  mark: number;
  gender: "male" | "female";
  city: string;

  createAt?: string;
  updateAt?: string;
}
