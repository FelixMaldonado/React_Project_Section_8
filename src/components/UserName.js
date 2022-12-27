import React from 'react';

const UserName = (props) => {
    
    return(
        <li>
            <div>
                <h1>{props.name}, {props.age}</h1>
            </div>
        </li>
    )
};

export default UserName;