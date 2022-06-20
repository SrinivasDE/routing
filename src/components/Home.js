import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  

  return ( 
    <div>
      <center>
        <h2>Welcome to Home Page</h2>
        <button onClick={() => navigate("ordersummary")} style={{fontSize:20}}>Order Place</button>
        </center>
    </div>
  )
}

export default Home;