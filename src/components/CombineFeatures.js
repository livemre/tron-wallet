import React, { useState } from "react";
import Loading from "./Loading";

const CombineFeatures = ({ combineID }) => {
  //TODO combineID ye göre kombinenin şu özellikleri alınacak.
  // FREE or Credit
  // Created Time
  // Total Matches Count
  // Total Odds

  const [isLoading, setIsLoading] = useState(false);
  const [credit, setCredit] = useState("0");
  const [matchesCount, setMatchesCount] = useState("5");
  const [totalOdds, setTotalOdds] = useState("21,66");

  async function getCombineFeatures() {
    // API isteği bulunarak kupon featuresleri alınır ve ilgili
    // statelere aktarılır.
  }

  return (
    <div className="combine-features-container">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="combine-features">
          {credit == "0" ? (
            <div>
              <p className="features-title">FREE</p>
              <p>COMBINE</p>
            </div>
          ) : (
            <div>
              <p className="features-title">{credit}</p>
              <p>CREDITS</p>
            </div>
          )}
          <div>
            <p className="features-title">{matchesCount}</p>
            <p>MATCHES</p>
          </div>
          <div>
            <p className="features-title">{totalOdds}</p>
            <p>TOTAL ODDS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombineFeatures;
