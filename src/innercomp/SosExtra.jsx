import React from 'react'
import Sosafter from './Sosafter'
const SosExtra = ({cond}) => {
  return (
    <div id='sosextra'>
      {cond}
     {cond ? <Sosafter/> :<h1>After pressing the SoS button,we will contact the nearest hospital,police station and rescue team to your current location</h1>}
    </div>
  )
}

export default SosExtra
