import React, {useState} from 'react'
import { GoHeart,GoHeartFill } from "react-icons/go";



const LikeAction = () => {




    const [isLiked, setIsLiked] = useState(false);

    async function isAlreadyLiked () {
        // bu kupon bu kullanıcı tarafından daha önce beğenilmişmi
        // ona göre ilgili state güncellenecek.
    }



    function likeCombine () {
        setIsLiked(item => !item)
    }



  return (
    <div className='free-actions'>
    <div onClick={likeCombine }>
    {isLiked ? <GoHeartFill size={"1.3rem"} color='red'/> : <GoHeart size={"1.3rem"}   />}
    </div>
    <p className='fa-likes-text'>134 likes</p>
    </div>
  )
}

export default LikeAction
