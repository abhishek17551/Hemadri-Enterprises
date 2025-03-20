import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { Link } from 'react-router-dom'
import './landing-page.css'

const LandingPage = () => {
  return (
    <div>
        <Carousel/>
        <div className='container'>
            <Link to='/products' className='explore-btn'>Explore Products</Link>
            <section>
                <p>About section</p>
            </section>
        </div>

    </div>
  )
}

export default LandingPage