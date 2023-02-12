import React from 'react';
import Card from '../UI/Card';
import './UsersList.css';
const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.list.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.name} ({ele.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
