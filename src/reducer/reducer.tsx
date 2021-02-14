import { Actions } from "../utils/actions";
import { UserPermissions } from "./permissions_reducer";

export enum MessageStatus {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  EMPTY = "",
}

export enum CurrentSortStatus {
  USER = "user",
  ROLE = "role",
  STATUS = "status",
  EMPTY = "",
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  id: string | number;
  status: boolean;
  imgUrl: string;
  permissions: UserPermissions;
  superAdmin: boolean;
}

export interface InitialState {
  allUsers: User[];
  filteredUsers: User[];
  isModalOpen: boolean;
  menuOpen: boolean;
  message: {
    status: MessageStatus;
    content: string;
  };
  currentSort: CurrentSortStatus;
}

export const reducer = (state: InitialState, action: Actions): InitialState => {
  if (action.type === "OPEN_MODAL") {
    return {
      ...state,
      isModalOpen: true,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "ACTIVATE_MESSAGE") {
    return {
      ...state,
      message: {
        status: action.payload.status,
        content: action.payload.content,
      },
    };
  }
  if (action.type === "CLEAR_MESSAGE") {
    return {
      ...state,
      message: {
        status: MessageStatus.EMPTY,
        content: "",
      },
    };
  }
  if (action.type === "ADD_USER") {
    const {
      firstName,
      lastName,
      email,
      id,
      role,
      status,
      permissions,
      imgUrl,
      superAdmin,
    } = action.payload;
    return {
      ...state,
      isModalOpen: false,
      message: {
        status: MessageStatus.SUCCESS,
        content: "Invitation has been successfully sent.",
      },
      allUsers: [
        ...state.allUsers,
        {
          firstName,
          lastName,
          email,
          id,
          role,
          status,
          permissions,
          imgUrl,
          superAdmin,
        },
      ],
      filteredUsers: [
        ...state.filteredUsers,
        {
          firstName,
          lastName,
          email,
          id,
          role,
          status,
          permissions,
          imgUrl,
          superAdmin,
        },
      ],
    };
  }
  if (action.type === "DELETE_USER") {
    let tempUsers = state.allUsers.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      allUsers: tempUsers,
      filteredUsers: tempUsers,
      message: {
        status: MessageStatus.WARNING,
        content: "User has been succesfully deleted.",
      },
    };
  }
  if (action.type === "TOGGLE_USER_STATUS") {
    let tempUsers = state.allUsers.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          status: !item.status,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      allUsers: tempUsers,
      filteredUsers: tempUsers,
      message: {
        status: MessageStatus.SUCCESS,
        content: "User status successfully changed.",
      },
    };
  }
  if (action.type === "SORT_USERS") {
    if (action.payload === CurrentSortStatus.USER) {
      let tempUsers = state.allUsers.sort((a, b) => {
        return a.firstName.localeCompare(b.firstName);
      });
      return {
        ...state,
        currentSort: action.payload,
        allUsers: tempUsers,
        filteredUsers: tempUsers,
      };
    }
    if (action.payload === CurrentSortStatus.ROLE) {
      let tempUsers = state.allUsers.sort((a, b) => {
        return a.role.toLowerCase().localeCompare(b.role.toLowerCase());
      });
      return {
        ...state,
        currentSort: action.payload,
        allUsers: tempUsers,
        filteredUsers: tempUsers,
      };
    }
    if (action.payload === CurrentSortStatus.STATUS) {
      let tempUsers = state.allUsers.sort((a, b) => {
        return a.status === b.status ? 0 : a.status ? -1 : 1;
      });
      console.log(tempUsers);
      return {
        ...state,
        currentSort: action.payload,
        allUsers: tempUsers,
        filteredUsers: tempUsers,
      };
    }
  }
  if (action.type === "FILTER_USERS") {
    const input = action.payload.toLowerCase();
    let tempUsers = state.allUsers.filter((item) => {
      const { firstName, lastName } = item;
      const combineNames = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`;
      return combineNames.indexOf(input) !== -1;
    });

    return {
      ...state,
      filteredUsers: tempUsers,
    };
  }
  if (action.type === "UPDATE_USER") {
    let tempUsers = state.allUsers.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          role: action.payload.role,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      allUsers: tempUsers,
      filteredUsers: tempUsers,
    };
  }
  if (action.type === "TOGGLE_USER_PERMISSIONS") {
    let tempUsers = state.allUsers.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.kind === "superAdmin") {
          return {
            ...item,
            superAdmin: !item.superAdmin,
          };
        } else if (action.payload.kind === "subPermission") {
          let tempPermissions = item.permissions.map((permissionGroup) => {
            return permissionGroup.map((permission) => {
              if (permission.id === action.payload.permissionId) {
                return {
                  ...permission,
                  status: !permission.status,
                };
              } else {
                return permission;
              }
            });
          });
          return {
            ...item,
            permissions: tempPermissions,
          };
        } else if (action.payload.kind === "groupPermission") {
          let tempPermissions = item.permissions.map(
            (permissionGroup, index) => {
              if (index === action.payload.permissionId) {
                let newGroupPermissions = permissionGroup.map((item) => {
                  if (action.payload.groupPermissionStatus === false) {
                    return {
                      ...item,
                      status: true,
                    };
                  } else if (action.payload.groupPermissionStatus === true) {
                    return {
                      ...item,
                      status: false,
                    };
                  }
                  return item;
                });
                return newGroupPermissions;
              } else {
                return permissionGroup;
              }
            }
          );
          return {
            ...item,
            permissions: tempPermissions,
          };
        }
        return item;
      } else {
        return item;
      }
    });
    return {
      ...state,
      allUsers: tempUsers,
      filteredUsers: tempUsers,
    };
  }
  if (action.type === "TOGGLE_MENU") {
    return {
      ...state,
      menuOpen: !state.menuOpen,
    };
  }
  return {
    ...state,
  };
};
