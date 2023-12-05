import React from 'react'
import { RiFileWarningFill } from "react-icons/ri";


const WarningsItem = ({warning}) => {
  return (
   
      <div className='warning-container'>
        <RiFileWarningFill color='yellow' />
        <p className='warning'>{warning}</p>
      </div>
  
  )
}

export default WarningsItem
