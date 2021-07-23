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
        {props.users.length !== 0 ? (
          props.users.map((user) => (
            <li onClick={() => deleteHandler(user.id)} key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>
            There is no users but you can add them!
          </h3>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
