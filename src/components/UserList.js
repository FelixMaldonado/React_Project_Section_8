import React from 'react';
import UserName from './UserName';

const UserList = props => {

 if (props.allUsers.length === 0){
    return <h2>No Users Entered.</h2>
 }

 return (
    
    <ul>
        {console.log('UserList: ',props.allUsers)}
        {props.allUsers.map((user)=>(
            <li>
                <UserName
                    name={user.name}
                    age={user.age}
                />
            </li>
        ))}
    </ul>
 )
};

export default UserList;