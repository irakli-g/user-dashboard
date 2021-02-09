export interface UserPermission {
  status: boolean;
  name: string;
  id: number;
}

export type UserPermissions = UserPermission[][];

export const permissions: UserPermissions = [
  [
    {
      status: false,
      name: "Permission 1",
      id: 1,
    },
    {
      status: false,
      name: "Permission 2",
      id: 2,
    },
    {
      status: true,
      name: "Permission 3",
      id: 3,
    },
    {
      status: true,
      name: "Permission 4",
      id: 4,
    },
    {
      status: false,
      name: "Permission 5",
      id: 5,
    },
  ],
  [
    {
      status: false,
      name: "Permission 6",
      id: 6,
    },
    {
      status: false,
      name: "Permission 7",
      id: 7,
    },
    {
      status: true,
      name: "Permission 8",
      id: 8,
    },
    {
      status: true,
      name: "Permission 9",
      id: 9,
    },
    {
      status: false,
      name: "Permission 10",
      id: 10,
    },
  ],
  [
    {
      status: true,
      name: "Permission 11",
      id: 11,
    },
    {
      status: false,
      name: "Permission 12",
      id: 12,
    },
  ],
];
