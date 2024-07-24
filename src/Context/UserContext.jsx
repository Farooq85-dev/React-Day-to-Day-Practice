import { Children, createContext, useState } from "react";

//Step 1:-
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("Muhammad Ghous");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider,UserContext };
