import React, { useState } from 'react'
import Loading from './Loading';
import WarningsItem from './WarningsItem';

const CombineWarnings = ({combineID}) => {


  // combineID ye göre api isteği yap ve tüm uyarıları al. 

  const _warnings = [
    "The first match of combine will start at 19:45 - 23.12.2034" ]

  const [isLoading, setIsLoading] = useState(false);
  const [warnings,setWarnings] = useState(_warnings);

  async function getCombineWarnings () {

    // uyarıları al ve _warnings statine aktar.

  }

  return (
    <div className='warnings-container'>
      {isLoading ? <Loading /> : warnings.map((item)=> <WarningsItem warning={item} />)}
    </div>
  )
}

export default CombineWarnings
