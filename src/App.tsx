import React from "react";
import Button from "./components/ui/Button";
import "../src/App";

const App = () => {
  return (
    <div>
      <Button
        text="Login"
        variant="primary"
        onClick={() => alert("Login Clicked")}
      />
      <Button
        text="Logout"
        variant="danger"
        onClick={() => alert("Logout Clicked")}
        disabled
      />
      <Button
        text="Register"
        variant="secondry"
        onClick={() => alert("Register Clicked")}
      />
    </div>
  );
};

export default App;
