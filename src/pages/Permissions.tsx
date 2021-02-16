import React from "react";
import AddPermission from "../components/Permissions/AddPermission";
import AllPermissions from "../components/Permissions/AllPermissions";
import PermissionsModal from "../components/Permissions/PermissionsModal";

const Permissions: React.FC = () => {
  return (
    <main id="permissions">
      <PermissionsModal />
      <AllPermissions />
      <AddPermission />
    </main>
  );
};

export default Permissions;
