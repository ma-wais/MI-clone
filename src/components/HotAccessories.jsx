import React from 'react'
import HotItemCard from '../components/HotItemCard.jsx'
import '../styles/HotAccessories.css'

const HotAccessories = ({music,musicCover, smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='hotAccessories'>
      <div>
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt='Cover' />
      </div>
        <div>
            {music && music.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />    
            ))}
            {smartDevice && smartDevice.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />    
            ))}
            {home && home.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />    
            ))}
            {lifeStyle && lifeStyle.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />    
            ))}
            {mobileAccessories && mobileAccessories.map((item,index)=>(
             <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />    
            ))}
            <HotItemCard image="https://cdn.shopify.com/s/files/1/0231/3627/2464/files/Browse_More-230x230_230x230.png?42374"  />
      </div>
    </div>
  )
}

export default HotAccessories
