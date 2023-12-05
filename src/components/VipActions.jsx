import React, { useState } from 'react'
import LikeAction from './LikeAction';
import WarningsItem from './WarningsItem';

const VipActions = () => {

  const [isPurchased, setIsPurchased] = useState(false);

  return (
    <div className='purchase-container'>
      {isPurchased ? <div className='purchased-container'>
         <LikeAction />
      </div> : 
      <div className='purchase-div'>
        <p className='purchase-info'>289 person purchased</p>
        <button className='purchase'>PURCHASE</button>
      </div>
      }
    </div>
  )
}

export default VipActions
