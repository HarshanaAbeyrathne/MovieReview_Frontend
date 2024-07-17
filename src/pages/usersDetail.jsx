import React from 'react'
import UsersList from '../component/UsersList'

function usersDetail() {
  return (
    <div>
    <h1 className="text-3xl font-bold mb-4 text-center">User Details</h1>
        <UsersList />
    </div>
  )
}

export default usersDetail