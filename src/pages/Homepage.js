import React from 'react'
import FooterComp from '../components/Footer';
import Navigation from '../components/Navigation';
import BestSelling from '../components/BestSelling';

export default function Homepage() {
    return (
        <div>
      
            <Navigation/>
            <BestSelling/>
            <FooterComp/>
            
        </div>
    )
}
