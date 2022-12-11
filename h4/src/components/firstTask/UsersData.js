import React from "react";
import { withUsers } from "../../context/DataContext";
import User from "./User";

export class UsersData extends React.Component {

    render() {
        const { users } = this.props
        return (
            <div>
                {users.map((user) => (                    
                    <User user={user} key={user.id}/> 
                ))}
            </div>
        )
    }
}

export default withUsers(UsersData)