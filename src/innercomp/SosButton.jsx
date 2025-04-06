import React from 'react'

const SosButton = (prop) => {
  return (
    <div id='buttonsos'>
      <button onClick={()=>{alert("Sos is send"); prop.cond(true)}}>SOS</button>
    </div>
  );
}

export default SosButton
