import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (

   <div className='descriptionbox'> 
      <div className="descriptionbox-navigator">
       <div className='descriptionbox-nav-box'>Description</div>
       <div className='descriptionbox-nav-box fade '> Reviews (122) </div>
    </div>
     <div className='descriptionbox-description'>
        <p> WizCart.com is your premier online destination for seamless and convenient shopping
           experiences. Our platform serves as a dynamic virtual marketplace, revolutionizing the 
           way you buy and sell products and services over the internet we provide a user-friendly 
           and easily accessible environment where you can explore a plethora
           of products and services, connect with sellers, and make hassle-free
           transactions, all from the comfort of your own space
        </p>
        <p>
        Experience the unmatched convenience, extensive accessibility, and worldwide reach that
         WizCart.com brings to your online shopping journey. Discover the future 
         of e-commerce with us!
        </p>
     </div>
   </div>
  )
}

export default DescriptionBox