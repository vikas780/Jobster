import React from 'react'
import { Logo } from '../components/'
import main from '../assets/images/main3.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui,
            quaerat aspernatur culpa facere quibusdam necessitatibus deleniti
            voluptates esse officiis dolorum beatae ex optio tenetur quo fugiat
            recusandae vel id.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Rgister
          </Link>
        </div>
        <img src={main} className='img main-img' alt='job hunt'></img>
      </div>
    </Wrapper>
  )
}

export default Landing
