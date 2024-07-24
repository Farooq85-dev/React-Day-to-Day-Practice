import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

function UseContextComp() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      Name:- {user}
      <button onClick={() => setUser("Muhammad Farooq")}>Update</button>
    </div>
  );
}

export default UseContextComp;
