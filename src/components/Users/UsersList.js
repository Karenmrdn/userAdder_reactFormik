import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  const deleteHandler = (userId) => {
    props.onUserDelete(userId);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li onClick={() => deleteHandler(user.id)} key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
