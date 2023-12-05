import React, {useState} from 'react'

const PublisherInfo = ({publisherID}) => {

  // Publisher hangi bilgilere sahip olmalı

  // 1- Yayıncı Adı (string)
  // 2- Yayıncı Logosu (string)

  const _publisherName = "Expert Betting Tips";
  const _publiherLogo = "http://sportstipsfree.click/mm/almanya.png"

  const [publisherName, setPublisherName] = useState(_publisherName);
  const [publisherLogo, setPublisherLogo] = useState(_publiherLogo);


  // Gelen publisherID yi veritabanından sorgula ve 
  // publisher bilgilerini getir.


  async function getPublisherDetails () {
    // Publisher bilgilerini çek ve ilgili state lere aktar.

  }



  return (
    <div className='publisher-info-container'>
      <div className='publisher-info'>
        <img src={publisherLogo} alt='Publisher' />
        <p>{publisherName}</p>
      </div>
    </div>
  )
}

export default PublisherInfo
