import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Tim", age: 20 },
    { id: 2, name: "Jane", age: 28 },
  ]);

  const addUserHandler = ({ name, age }) => {
    setUsers((prevState) => [...prevState, { id: Math.random(), name, age }]);
  };

  const deleteUserHandler = (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} onUserDelete={deleteUserHandler} />
    </>
  );
}

export default App;
