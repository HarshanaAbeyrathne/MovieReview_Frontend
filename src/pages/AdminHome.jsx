import React from 'react'

function AdminHome() {
  return (
    <div>
      <h1>Admin Home</h1>
      <button onClick={() => window.location.href = '/show-all-users'}>Show All Users</button>
    </div>
  )
}

export default AdminHome