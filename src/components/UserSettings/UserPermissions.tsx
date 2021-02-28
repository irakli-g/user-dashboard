import React from "react";
import { MessageStatus, User } from "../../reducer/reducer";
import { useAppContext } from "../../context/context";
import Permissions from "./Permissions";

const UserPermissions: React.FC<User> = ({ role, status, id, superAdmin, permissions }) => {
	const { toggleUserPermissions, activateMessage } = useAppContext();

	return (
		<div className="user-permissions">
			<div>
				<h2>Permissions</h2>
				<p>{role}</p>
			</div>
			<div className="super-admin">
				<h3 style={!status ? { opacity: 0.3 } : undefined}>Super Admin</h3>
				<button
					style={!status ? { opacity: 0.3 } : undefined}
					disabled={!status}
					className={superAdmin === true ? "user-status-btn active" : "user-status-btn inactive"}
					onClick={() => {
						toggleUserPermissions(id, "superAdmin", undefined, undefined);
						activateMessage(MessageStatus.SUCCESS, "Permissions have been successfully changed.");
					}}
				>
					<div className={superAdmin === true ? "btn active" : "btn inactive"}></div>
				</button>
			</div>
			<div className="permissions-container">
				<Permissions permissions={permissions} id={id} status={status} />
			</div>
		</div>
	);
};

export default UserPermissions;
