import React from "react";
import { MessageStatus, User } from "../../reducer/reducer";
import { BiKey } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../../context/context";

const UserShowcase: React.FC<User> = ({ status, firstName, lastName, email, role }) => {
	const { activateMessage } = useAppContext();

	return (
		<div className="user-showcase">
			<div className="showcase">
				<figure className="user-photo">
					<FaUserCircle className="react-icon user" />
					{role === "admin" && <BiKey className="react-icon key" />}
				</figure>
				<p className={status ? undefined : "user-p inactive hidden"}>Upload A Photo</p>
			</div>
			<div className="short-info">
				<h3 style={!status ? { opacity: 0.3 } : undefined}>{firstName}</h3>
				<h3 style={!status ? { opacity: 0.3 } : undefined}>{lastName}</h3>
				<h4 style={!status ? { opacity: 0.3 } : undefined}>{email}</h4>
			</div>
			<button
				className={status ? "user-btn" : "user-btn inactive"}
				onClick={() => {
					activateMessage(MessageStatus.SUCCESS, "Invitation has been successfully resent.");
				}}
			>
				Resend Invite
			</button>
		</div>
	);
};

export default UserShowcase;
