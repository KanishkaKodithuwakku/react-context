import React, { useContext} from 'react'
import Card from './../components/card/Card';
import { UserContext } from '../context/UserContext';
import CardDescription from './../components/card/CardDescription';

const Users = () => { 

    const { users } = useContext(UserContext);
    //console.log(users);

    if (!users || users.length === 0) {
      return <p>No users available.</p>;
    }

    return (
      <>
        {users.map((user) => (
          <Card key={user.email} user={user} title={user.fullname}>
            <CardDescription text={user.address} />
          </Card>
        ))}
      </>
    );

}

export default Users;
