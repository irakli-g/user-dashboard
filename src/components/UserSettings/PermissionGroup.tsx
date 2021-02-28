import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useAppContext } from "../../context/context";
import { MessageStatus } from "../../reducer/reducer";
import { BsCircleFill } from "react-icons/bs";
import { UserPermission } from "../../reducer/permissions_reducer";

interface Props {
	permissions: UserPermission[];
	index: number;
	id: string | number;
	status: boolean;
}

const PermissionGroup: React.FC<Props> = ({ permissions, status, id, index }) => {
	const statusArr = permissions.map((permission) => permission.status);

	const defineGroupStatus = () => {
		let status = true;
		if (statusArr.indexOf(true) !== -1) {
			status = true;
		} else if (statusArr.indexOf(true) === -1) {
			status = false;
		}
		return status;
	};

	const { activateMessage, toggleUserPermissions } = useAppContext();
	const [expand, setExpand] = useState(false);
	const [groupStatus, setGroupStatus] = useState<boolean>(defineGroupStatus());
	useEffect(() => {
		setGroupStatus(defineGroupStatus());
	}, [permissions]);

	return (
		<ul>
			<div className="ul-header">
				<h4
					style={!status ? { opacity: 0.3 } : undefined}
					onClick={() => {
						setExpand(!expand);
					}}
				>
					<BiChevronDown className="react-icon down" />
					<span>Permission Group {index + 1}</span>
				</h4>
				<button
					style={!status ? { opacity: 0.3 } : undefined}
					disabled={!status}
					className={groupStatus === true ? "user-status-btn active" : "user-status-btn inactive"}
					onClick={() => {
						setGroupStatus(!groupStatus);
						toggleUserPermissions(id, "groupPermission", index, groupStatus);
						activateMessage(MessageStatus.SUCCESS, "Permissions have been successfully changed.");
					}}
				>
					<div className={groupStatus === true ? "btn active" : "btn inactive"}></div>
				</button>
			</div>
			<div className={expand ? "li-container active" : "li-container"}>
				{permissions.map((permission) => {
					const { id, status, name } = permission;
					return (
						<li key={id}>
							<p style={!status ? { opacity: 0.3 } : undefined}>
								<BsCircleFill
									className="react-icon circle"
									style={status ? { color: "#add8e6" } : { color: "#f08080" }}
								/>
								<span>{name}</span>
							</p>
							<button
								style={!status ? { opacity: 0.3 } : undefined}
								disabled={!status}
								className={status === true ? "user-status-btn active" : "user-status-btn inactive"}
								onClick={() => {
									toggleUserPermissions(id, "subPermission", id, undefined);
									activateMessage(
										MessageStatus.SUCCESS,
										"Permissions have been successfully changed."
									);
								}}
							>
								<div className={status === true ? "btn active" : "btn inactive"}></div>
							</button>
						</li>
					);
				})}
			</div>
		</ul>
	);
};

export default PermissionGroup;
