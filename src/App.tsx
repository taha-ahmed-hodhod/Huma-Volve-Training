import React from "react";
import Button from "./components/ui/Button";
import "../src/App";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";

const App = () => {
  const users = [
  {
    Name: "Ahmed",
    Age: 25,
    City: "Cairo",
  },
  {
    Name: "Mohamed",
    Age: 30,
    City: "Damietta",
  },
  {
    Name: "Omar",
    Age: 22,
    City: "Alexandria",
  },
];
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

      <div className="cards">
        <Card title="Js Course" description="js course is uesful" image="src\assets\hero.png" children={<Button text="More..." variant="primary" onClick={() => alert("More Clicked")}/>} />
        <Card title="React Course" description="react course is uesful" image="src\assets\hero.png" children={<Button text="More..." variant="primary" onClick={() => alert("More Clicked")}/>} />
        <Card title="Angular Course" description="angular course is uesful" image="src\assets\hero.png" children={<Button text="More..." variant="primary" onClick={() => alert("More Clicked")}/>} />
      </div>
      <Table columns={["Name", "Age" , "City"]} data={users} striped />
    </div>
  );
};

export default App;
