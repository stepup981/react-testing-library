import React, { useEffect, useState } from "react";
import User from "./User";

const UsersForTest = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setUsers(json);
          setIsLoading(false);
          console.log(users)
        }, 1000);
      });
  }, []);

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {isLoading && <h1 id="users-loading">Идёт загрузка..</h1>}
      {users.length && (
        <div id="users-list">
          {users.map((user) => (
            <User key={user.id} onDelete={onDelete} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersForTest;
