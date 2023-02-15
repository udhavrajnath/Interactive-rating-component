import React from 'react'
import '../styles/Thankyou.css'
import ThankYouLogo from '../styles/illustration-thank-you.svg'

function Thankyou(props) {
  return (
    <div className='Thankyou'>
        <div className='TYlogo'>
            <div><img src={ThankYouLogo}/></div>
        </div>
        <div className='result'>
            <div id='selectText'><p>You selected {props.score} out of 5</p></div>
        </div>
        <div className='descr'>
            <p id='titleTY'>Thank you!</p><br/>
            <p id='descTY'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    </div>
  )
}

export default Thankyou