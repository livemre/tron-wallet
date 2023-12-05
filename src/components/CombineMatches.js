import React, {useState} from 'react'
import Loading from './Loading';
import SingleMatch from './SingleMatch';

const CombineMatches = ({combineID}) => {


  // TODO combineID ye ait maçları çek ve state e aktar. map ile 
  // SingleMatch componentinde göster.

  const _singleMatches = [
  {"id":"1","league":"Turkey Super League","time":"19:45","home":"Galatasaray", "away" : "Fenerbahçe", "prediction":"Galatasaray Team Goal 2,5 Goal Over", "odd":"1,75", "result":"1","type":"1"},
  {"id":"1","league":"Spain La Liga","time":"19:45","home":"Barcelona", "away" : "Cadiz", "prediction":"Barcelona Wins & 2,5 Team Goal Over & 3,5 Goal Over ", "odd":"39,60", "result":"2","type":"3"},
  {"id":"1","league":"Italy Serie A","time":"19:45","home":"Roma", "away" : "Milan", "prediction":"1st Half Roma Wins", "odd":"1,75", "result":"0","type":"2"},



]

  const [isLoading, setIsLoading] = useState(false);
  const [singleMatches, setSingleMatches] = useState(_singleMatches);

  return (
    <div>
      {isLoading ? <Loading /> : singleMatches.map((item)=> {
        return <SingleMatch match={item} />
      })}
    </div>
  )
}

export default CombineMatches
