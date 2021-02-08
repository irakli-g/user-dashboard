// NEEDS TO ESTABLISH DATA STRUCTURE

interface Permission {
  status: boolean;
  name: string;
}

type Permissons = Permission[];

export const permissions: Permissons = [];
