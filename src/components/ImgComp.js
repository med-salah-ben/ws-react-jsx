import React from 'react';
import attack from '../imges/attack.jpg'


const ImgComp = () => {
  return (
      <div>
          <img style={{width:"100%"}} src={attack } alt='attack on t'/>
          <iframe width="100%" height="621" src="https://www.youtube.com/embed/cvTipU9gN5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  )
};

export default ImgComp;
