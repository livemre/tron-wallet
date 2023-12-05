import React, {useState} from 'react'
import FreeActions from './FreeActions';
import VipActions from './VipActions';


const CombineActions = ({combineID,isVip}) => {

  // combineID sine göre beğeni sayısını ve satın alma sayısını çek ve ilgili
  // statelere aktar. Eğer kupon ücretsizse satın alma sayısını göstermene gerek yok


  const [likeCount,setLikeCount] = useState("116");
  const [purchaseCount, setPurchaseCount] = useState("46");



  // TODO Kupon ücretsizse Like olayını yapabilir.
  // Kupon paralı ise like sadece gösterilir. Like yapılmaz.

  async function checkCombineIsVip () {
    // Kuponun vip olup olmamasına göre action bölününü ayarla
  }

  async function getLikeCount () {
    // Api isteği yaparak like sayısını al state e aktar.
  }

  async function getPurchaseCount () {
    // Api isteği yaparak satın alma sayısını al state e aktar.
  }

  async function likeCombine () {
    // Eğer kupon ücretsizse like işlemini yaptır.
    // Kupon satın alınmışsa like işlemini yaptır.
  }


  return (
    <div className='combine-actions'>
      {isVip ? <VipActions /> : <FreeActions />}
    </div>
  )
}

export default CombineActions
