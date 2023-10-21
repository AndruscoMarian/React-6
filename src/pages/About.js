import { ChangeProfile } from "../changeProfile/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const About = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1> About Page {username}</h1>
      <ChangeProfile />
    </div>
  );
};
