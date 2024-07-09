import React from 'react'
import { useSelector } from 'react-redux';

function Home() {

  const {user , token} = useSelector(state => state.auth);  
  return (
    <div>Home

      <div>{user}<br/>{token}</div>
    </div>

  )
}

export default Home