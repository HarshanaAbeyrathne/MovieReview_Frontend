import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {

  const {user , token} = useSelector(state => state.auth);  
  const navigate = useNavigate();
  const handleRederect = () => {
    navigate('/an')
  }
  return (
    <div>Home

      <div>{user}<br/>{token}</div>
      <button onClick={handleRederect}>Redirect</button>
    </div>

  )
}

export default Home