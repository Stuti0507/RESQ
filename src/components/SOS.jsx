import React, { useState } from 'react'
import SosButton from '../innercomp/SosButton'
import SosExtra from '../innercomp/SosExtra'
import Sosabout from '../innercomp/Sosabout'
const SOS = () => {
  const [cond,setCond]=useState(false);

  return (
    <div id='SOS'>
      <SosButton cond={setCond} />
      <SosExtra cond={cond} />
      <Sosabout/>
    </div>
  )
}

export default SOS
