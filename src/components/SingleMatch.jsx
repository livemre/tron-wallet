import React,{useEffect, useState} from "react";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiSoccerBall } from "react-icons/gi";
import { IoBasketball } from "react-icons/io5";
import { IoTennisballSharp } from "react-icons/io5";




const SingleMatch = ({ match }) => {

  // TODO maç sonuçlanmışsa ona göre render et.

  // Match result 0 ise WON 1 LOST 2 Waiting

  const [isResult,setIsResult] = useState(false);
  const [icon, setIcon] = useState();

  useEffect(()=> {

    chooseIcon()
  },[icon])


  function chooseIcon () {
    switch (match.type) {
      case "1":
        setIcon(<GiSoccerBall color="#DFDFDF" />)
        break;
      case "2":
        setIcon(<IoBasketball color="orange" />)
        break;
      case "3":
        setIcon(<IoTennisballSharp color="#B1FF70" />)
        break;
      default:
        break;
    }
  }



  return (
    <div className="single-match-container">
      <div className="single-match">
        <div className="league-time">
          {icon}
          <p className="leauge">{match.league} -</p>
          <p>{match.time}</p>
          <p>{match.type}</p>
        </div>
        <div className="single-result">
        
        </div>
        <div className="teams">
          
        <p>{match.home}</p>
        {match.result == 0 || match.result == 1  ? <p className="result-scores">(0-0) / (1-2) </p> : <p className="result-scores">-</p>}
        <p>{match.away}</p>
        </div>
        <div className="prediction-odds">
        <p className="prediction">{match.prediction}</p>
        {match.result == 0 ? <p className="odd-won">{match.odd}</p> : match.result == 1 ? <p className="odd-lost">{match.odd}</p> : <p className="odd">{match.odd}</p>}
        </div>
      </div>
    </div>
  );
};

export default SingleMatch;
