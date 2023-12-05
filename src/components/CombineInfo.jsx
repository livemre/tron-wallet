import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
import "../App.css";

const CombineInfo = ({combineID}) => {

  const _combineStatus = [0];

  const [isLoading, setIsLoading] = useState(true);
  const [combineStatus, setCombineStatus] = useState(null);

  const status = [
    {"icon": <FiClock color='yellow' size={"1rem"} />, "desc":"Waiting!"},
    {"icon": <FiCheckCircle color='green' />, "desc":"WON!"},
    {"icon": <FiXCircle color='red' />, "desc":"LOST!"}
  ]

  useEffect(()=> {
    switch (_combineStatus[0]) {
      case 0:
        setCombineStatus(status[0])
        setIsLoading(false);
        break;
      case 1:
        setCombineStatus(status[1])
        setIsLoading(false);
        break;
      case 2:
      setCombineStatus(status[2])
      setIsLoading(false);
        break;
    
      default:
        break;
    }
  }, [])



  async function getCombineStatus () {
    // TODO combine id sine göre kuponun status durmunu alıp combineStatus 
    // statetine ekle.
  }

  return (
    <div className='combine-status-container'>
      {isLoading ? <Loading /> : 
      <div className='combine-status'>
        <p className='combine-status-icon'>{combineStatus.icon}</p>
        <p className='combine-status-desc'>{combineStatus.desc}</p>
      </div>
      }
    </div>
  )
}

export default CombineInfo


// Veritabanına combinestatus bölümü eklenecek. Kupona ait olacak. 
// Integer değer alacak.