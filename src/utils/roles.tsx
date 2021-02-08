interface Role {
  id: number;
  name: string;
}
type Roles = Role[];

export const roles: Roles = [
  {
    id: 1,
    name: "Admin",
  },
  {
    id: 2,
    name: "User",
  },
];
