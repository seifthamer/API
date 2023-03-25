import React from 'react'
import UserCard from './UserCard'
const userList = ({ListOfUser}) => {
  return (
    <div>
        {ListOfUser.map(user => <UserCard user={user}></UserCard>)}
    </div>
  )
}

export default userList