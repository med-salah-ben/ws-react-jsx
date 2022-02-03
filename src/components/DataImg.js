import React from 'react';
import "./DataImg.css"

const DataImg = () => {
    const dataAnime = [
        {name:"attack on titan",
         img:"https://www.denofgeek.com/wp-content/uploads/2021/11/AOT_Original-KV_Logo_Copyright.jpg?resize=724,1024" },
         {name:"hunter X hunter",
          img:"https://m.media-amazon.com/images/I/71pYdyAArhL._AC_SX425_.jpg"  
        },
        {name:"naruto",
         img :"https://p325k7wa.twic.pics/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg?twic=v1/cover=760x844/step=10/quality=80"     
    }
    ]
  return (
<div className='container'>
    {dataAnime.map((el,i)=>(
        <div  key={i}>
        <h3>{el.name}</h3>
        <img className="animeImg" src={el.img} alt="anime" />
        </div>)
    )}
</div>
  )
};

export default DataImg;
