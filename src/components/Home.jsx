import React from 'react'

const Home = () => {
  return (
    <div id='Home'>
      <div id="latest">
      <h1>Latest update</h1>
      <p>Stay informed withe the latest disaster alerts and updates</p>
      <button>Explore</button>
      </div>
      <div id="foot">
        <div id="info" className='box'>
          <h1 >Info Update</h1>
          <p>Stay updated with the latest disaster information and safety tips.</p>
          <div className="inner">
          <h4>Location</h4>
          <p>City A</p>
          </div>
          <div className="inner">
          <h4>Status</h4>
          <p>Active</p>
          </div>
        </div>
        <div id="update" className='box'>
        
        <h1>Stay Updated</h1>
        <p>Recieve real time alerts and updates on disaster situation.</p>
          <div className="inner">
          <h4>Alert Type</h4>
          <p>Flood</p>
          </div>
          <div className="inner">
          <h4>Region</h4>
          <p>Region B</p>
          </div>
        </div>
        <div id="contact" className='box'>
        <h1 >Call for help</h1>
        <p>Need assistance? Contact emergency services immediately.</p>
        <button onClick={()=>{alert("Help is arriving"); }}>Get Help Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home
