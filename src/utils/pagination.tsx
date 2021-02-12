import { User } from "../reducer/reducer";

export const pagination = (data: User[], userPerPage: number) => {
  const pages = Math.ceil(data.length / userPerPage);

  const newArray = Array.from({ length: pages }, (_, index) => {
    const start = index * userPerPage;
    return data.slice(start, start + userPerPage);
  });
  return newArray;
};
