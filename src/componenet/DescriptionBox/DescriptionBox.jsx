import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform tha facilitate buying and selling of products or services over the internet serves as a virtual marketplace where business and individuals can showcase their products,intract with customers,and conduct transaction without the need of a physical presence.E-commerce website have gained immense popularity due to their convenience accesibility, and the global reach they offer.</p>
            <p>E-commerce website typically display products or services along with detailed description ,images,prices,and any available variations (e.g., sizes, colors). Each product usually has its own dedi with relevent information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
