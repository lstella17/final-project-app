import React from 'react'
import { Link } from 'react-router-dom'
import '../components/ScrollAnim.css'

function ScrollAnim() {
  return (
    <div className='scroll-anim'>
      <div  class="section one">
        <div class="srcoll-container">
          <div class="column-left">
            <h1 class="srcoll-text">Summer 2022</h1>
            <p class="srcoll-text">Choose your <br />destination now.</p>
            <Link to='/summer2022'>
              <button class='scroll-btn'>Get Started</button>              
            </Link>
          </div>
          <div class="column-right">
            <img src="./images/glasses.jpg" alt="summeroffers" class="scroll-img" />
          </div>
        </div>
      </div >
      <div  class="section two">
        <div class="srcoll-container">
          <div class="column-left">
            <p class="srcoll-text">
              Travel safe!
            </p>
          </div>
          <div class="column-right">
            <img src="./images/covidFree.jpg" alt="idk yet" class="scroll-image" />
          </div>
          </div>
        </div >
        <div  class="section three">
          <div class="srcoll-container">
            <div class="column-left">
              <p class="srcoll-text">Join the Adventure newsletter to receive our best vacation deals</p>
            </div>
            <div class="column-right">
              <div className='input-areas'>
                <form>
                  <h1 className='subscribe-text'>
                    You can unsubscribe at any time.
                  </h1>
                  <br />
                  <input className='email-input' name='email' type='email' placeholder='Your Email'/>
                  <Link to='/sign-up'>
                    <button class='scroll-btn'>Subscribe</button>              
                  </Link>
                </form>
              </div>
            </div>
        </div>
      </div >
    </div>
  )
}

export default ScrollAnim
