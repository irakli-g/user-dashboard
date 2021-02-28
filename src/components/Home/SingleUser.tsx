import React from "react";
import { User } from "../../reducer/reducer";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";
import { BiKey } from "react-icons/bi";
import { useAppContext } from "../../context/context";
import { Link } from "react-router-dom";

const SingleUser: React.FC<User> = ({ status, lastName, firstName, role, id, email }) => {
	const { deleteUser, toggleStatus } = useAppContext();

	return (
		<div className="user">
			<div className="user-name">
				<figure className="icon">
					<FaUserCircle
						className="react-icon user-circle"
						style={status === false ? { opacity: 0.3 } : undefined}
					/>
				</figure>
				<div className="content">
					<h3 style={status === false ? { opacity: 0.3 } : undefined}>
						{firstName} {lastName}
					</h3>
					<h4>{email}</h4>
				</div>
			</div>
			<div className="user-role">
				{role === "admin" ? (
					<BiKey
						className="react-icon key"
						style={status === false ? { opacity: 0.3 } : undefined}
					/>
				) : null}
				<h4 style={status === false ? { opacity: 0.3 } : undefined}>{role}</h4>
			</div>
			<div
				className={status === true ? "user-status active" : "user-status inactive"}
				onClick={() => {
					toggleStatus(id);
				}}
			>
				<button className={status === true ? "btn active" : "btn inactive"}></button>
			</div>
			<div className="user-actions">
				<Link to={`/user/${id}`}>
					<VscGear className="react-icon gear" style={!status ? { display: "none" } : undefined} />
				</Link>
				<FaTrash
					className="react-icon trash"
					onClick={() => {
						deleteUser(id);
					}}
				/>
			</div>
		</div>
	);
};

export default SingleUser;
