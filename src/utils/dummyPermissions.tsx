import { UserPermissions } from "../reducer/permissions_reducer";
import { v4 } from "uuid";

export const dummyPermissions: UserPermissions = [
  [
    {
      status: false,
      name: "Permission 1",
      id: v4(),
    },
    {
      status: false,
      name: "Permission 2",
      id: v4(),
    },
    {
      status: true,
      name: "Permission 3",
      id: v4(),
    },
    {
      status: true,
      name: "Permission 4",
      id: v4(),
    },
    {
      status: false,
      name: "Permission 5",
      id: v4(),
    },
  ],
  [
    {
      status: false,
      name: "Permission 6",
      id: v4(),
    },
    {
      status: false,
      name: "Permission 7",
      id: v4(),
    },
    {
      status: true,
      name: "Permission 8",
      id: v4(),
    },
    {
      status: true,
      name: "Permission 9",
      id: v4(),
    },
    {
      status: false,
      name: "Permission 10",
      id: v4(),
    },
  ],
  [
    {
      status: true,
      name: "Permission 11",
      id: v4(),
    },
    {
      status: false,
      name: "Permission 12",
      id: v4(),
    },
  ],
];
