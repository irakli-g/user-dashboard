import React from "react";
import AddPermission from "../components/Permissions/AddPermission";
import AllPermissions from "../components/Permissions/AllPermissions";

const Permissions: React.FC = () => {
  return (
    <main id="permissions">
      <AllPermissions />
      <AddPermission />
    </main>
  );
};

export default Permissions;
