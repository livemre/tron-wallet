import React, { useState } from "react";
import CombineFeatures from "./CombineFeatures";
import CombineInfo from "./CombineInfo";
import CombineMatches from "./CombineMatches";
import CombineWarnings from "./CombineWarnings";
import PublisherInfo from "./PublisherInfo";
import CombineActions from "./CombineActions";
import VipContent from "./VipContent";

const Combine = ({ combineID }) => {
  const [publisherID, setPublisherID] = useState();


  const [isVip, setIsVip] = useState(false);

  async function getPublisherId() {
    // TODO publisher id yi bul ve publisherid stateine ekle.
  }

  return (
    <div className="combine">
      <CombineInfo combineID={combineID} />
      <PublisherInfo publisherID={publisherID} />
      {isVip ? <VipContent /> : <CombineMatches combineID={combineID} />}
      <CombineFeatures combineID={combineID} />
      <CombineWarnings combineID={combineID} />
      <CombineActions combineID={combineID} isVip={isVip} />
    </div>
  );
};

export default Combine;
