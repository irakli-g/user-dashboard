import { User } from "../reducer/reducer";
import { v4 } from "uuid";
import { permissions } from "./permissions";

export const dummyUsers: User[] = [
  {
    firstName: "Jason",
    lastName: "Todd",
    email: "jason.todd@gmail.com",
    id: v4(),
    imgUrl: "",
    role: "admin",
    status: true,
    superAdmin: false,
    permissions: permissions,
  },
  {
    firstName: "Irakli",
    lastName: "Ghachava",
    email: "irakli.ghachava@gmail.com",
    id: v4(),
    imgUrl: "",
    role: "user",
    status: false,
    superAdmin: false,
    permissions: permissions,
  },
  {
    firstName: "Abishek",
    lastName: "Shohat",
    email: "abishek@yahoo.com",
    id: v4(),
    imgUrl: "",
    role: "user",
    status: true,
    superAdmin: false,
    permissions: permissions,
  },
  {
    firstName: "Alan",
    lastName: "Walker",
    email: "walker@gmail.co.uk",
    id: v4(),
    imgUrl: "",
    role: "user",
    status: true,
    superAdmin: false,
    permissions: permissions,
  },
];
