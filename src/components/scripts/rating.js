import { useState } from "react"
import React from 'react'
import '../styles/rating.css'
import starlogo from '../styles/icon-star.svg'
import Thankyou from "./Thankyou";

function Rating() {

    const [custRating,setCustRating]=useState('0');
    const [submitted,setSubmitted]=useState(false);

    function HandleClick(numString){
      setCustRating(numString)
    }

    function HandleSubmit(){
      setSubmitted(true);
    }
  return (
    <>
    {(submitted==false)&&
        <div className="RatingBox">
          <div className="starLogo">
            <div className="starBox">
              <img src={starlogo} />
            </div>
          </div>
          <div className="desc">
            <p id="title">How did we do?</p><br />
            <p id="desc"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <div className="RatingNum">
            <button id={(custRating == '1') ? "numberSelected" : "number"} onClick={() => HandleClick('1')}>1</button>
            <button id={(custRating == '2') ? "numberSelected" : "number"} onClick={() => HandleClick('2')}>2</button>
            <button id={(custRating == '3') ? "numberSelected" : "number"} onClick={() => HandleClick('3')}>3</button>
            <button id={(custRating == '4') ? "numberSelected" : "number"} onClick={() => HandleClick('4')}>4</button>
            <button id={(custRating == '5') ? "numberSelected" : "number"} onClick={() => HandleClick('5')}>5</button>

          </div>
          <div className="submit">
            <button id="submitbtn" onClick={() => HandleSubmit()}>SUBMIT</button>
          </div>
        </div>}

        {(submitted==true&&custRating!=='0')&&
          <Thankyou score={custRating}/>
        }
    </>
  
  )
}

export default Rating