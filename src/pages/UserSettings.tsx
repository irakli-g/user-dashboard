import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/context";
import UserShowcase from "../components/UserSettings/UserShowcase";
import UserDetails from "../components/UserSettings/UserDetails";
import UserPermissions from "../components/UserSettings/UserPermissions";
import { User } from "../reducer/reducer";
import { VscSettingsGear } from "react-icons/vsc";

const UserSettings: React.FC = () => {
  const { id } = useParams();
  const { allUsers } = useAppContext();
  const user = allUsers.find((item) => item.id === id);

  return (
    <main id="user">
      <header>
        <h1 className="header-title">User Setup</h1>
        <figure className="header-icon">
          <VscSettingsGear className="react-icon gear" />
        </figure>
      </header>
      <div className="container">
        <UserShowcase {...(user as User)} />
        <UserDetails {...(user as User)} />
        <UserPermissions {...(user as User)} />
      </div>
    </main>
  );
};

export default UserSettings;
