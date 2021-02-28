import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { UserPermission } from "../../reducer/permissions_reducer";
import { FaTrash } from "react-icons/fa";
import { usePermissionsContext } from "../../context/permissions_context";

const Permission: React.FC<UserPermission> = ({ id, status, name }) => {
	const { openPermissionsModal } = usePermissionsContext();

	return (
		<li className="permission">
			<p>
				<BsCircleFill
					className="react-icon circle"
					style={status ? { color: "#add8e6" } : { color: "#f08080" }}
				/>
				<span>{name}</span>
				<FaTrash
					className="react-icon trash"
					onClick={() => {
						openPermissionsModal(id);
					}}
				/>
			</p>
			<button
				style={status ? { opacity: 0.3 } : undefined}
				disabled={!status}
				className={status === true ? "permission-btn active" : "permission-btn inactive"}
				onClick={() => {}}
			>
				<div className={status === true ? "btn active" : "btn inactive"}></div>
			</button>
		</li>
	);
};

export default Permission;
