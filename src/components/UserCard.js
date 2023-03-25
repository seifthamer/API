import React from 'react'
import usercard from './userCard.css'

const userCard = ({user}) => {
  return (
    <div>
        <h1> Name :{user.name} </h1>
        <h6>Email :{user.email} </h6>
        <h4> UserName :{user.username} </h4>
    </div>
  )
}

export default userCard