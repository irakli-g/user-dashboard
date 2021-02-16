import React from "react";
import { usePermissionsContext } from "../../context/permissions_context";
import { AiFillCloseCircle } from "react-icons/ai";
import { useAppContext } from "../../context/context";
import { MessageStatus } from "../../reducer/reducer";
import { RiAlarmWarningFill } from "react-icons/ri";

const PermissionsModal: React.FC = () => {
  const {
    closePermissionsModal,
    deletePermission,
    permissionToDelete,
    permissionsModal,
  } = usePermissionsContext();
  const { activateMessage } = useAppContext();

  return (
    <div
      className={
        permissionsModal ? "permissions-modal active" : "permissions-modal"
      }
    >
      <div className="permissions-modal-container">
        <figure>
          <AiFillCloseCircle
            className="react-icon close"
            onClick={closePermissionsModal}
          />
        </figure>
        <div className="permissions-modal-content">
          <h2>
            Are you sure about this?
            <RiAlarmWarningFill className="react-icon alarm" />
          </h2>
          <p>
            If you delete this permission, existing and new users will not be
            able to use it anymore.
          </p>
          <button
            className="btn"
            onClick={() => {
              if (
                permissionToDelete !== null &&
                permissionToDelete.id !== undefined
              ) {
                deletePermission(permissionToDelete.id);
                closePermissionsModal();
                activateMessage(
                  MessageStatus.WARNING,
                  "Permissions has been successfully removed."
                );
              }
            }}
          >
            Delete Permission
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsModal;
