import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { provider, auth } from "./config/firebase";

const App = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        setUser(user);
      });
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };
  return (
    <div className="App">
      <h1>Las Previas</h1>
      {user ? (
        <>
          <p>Hey, {user.displayName}</p>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={login}>
          Login with Facebook
        </Button>
      )}
      <Button variant="contained" color="primary">
        Comienza las previas
      </Button>
    </div>
  );
};

export default App;
