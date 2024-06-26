import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  const loadingUser = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    loadingUser();
  }, []);

  return (
    <div data-testid="user-link">
      {users.map((user) => (
        <Link 
          to={`/users/${user.id}`} 
          key={user.id} 
          data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;