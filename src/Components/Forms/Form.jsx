import React from 'react'
import "./form.css";

const Form = () => {
  return (
    <div className='form-main-div' >
      <p className='form-title'>Fill the form below to enquire</p>
      <div className='form-container'>

        <form className='form' >
          <div className='name-input-div'>
            <label>*Enter your name</label>
            <input type="text" placeholder='Eg. Aneesha Mehra' />
          </div>
          <div className='phone-input-div'>
            <label>*Enter your WhatsApp Number</label>
            <div className='phone-inputs'>
              <input type="text" className='country-code-input' value="+91" disabled={true}/>
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8932 0.400024H9.88873C9.82043 0.400024 9.75614 0.433507 9.71596 0.488417L5.91105 5.73306L2.10614 0.488417C2.06596 0.433507 2.00167 0.400024 1.93337 0.400024H0.928907C0.841853 0.400024 0.79096 0.499132 0.841853 0.570114L5.56417 7.08038C5.7356 7.3161 6.0865 7.3161 6.25659 7.08038L10.9789 0.570114C11.0311 0.499132 10.9802 0.400024 10.8932 0.400024Z" fill="black" fillOpacity="0.25"/>
</svg>

              {/* <select className='country-code-input'>
                <option value="+91">+91</option>
              </select> */}
              <input type="text" className='mobileNo-input' placeholder='Eg. 0000000000' />
            </div>
          </div>
          <div className='profession-input-div'>
            <label>*Select your profession</label>
            <input type="text" placeholder='Choose the most relevant option' />
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9821 2.97144H9.97767C9.90937 2.97144 9.84508 3.00492 9.8049 3.05983L5.99999 8.30447L2.19508 3.05983C2.1549 3.00492 2.09062 2.97144 2.02231 2.97144H1.01785C0.930797 2.97144 0.879904 3.07054 0.930797 3.14153L5.65312 9.65179C5.82455 9.88751 6.17544 9.88751 6.34553 9.65179L11.0679 3.14153C11.1201 3.07054 11.0692 2.97144 10.9821 2.97144Z" fill="black" fillOpacity="0.25" />
            </svg>
          </div>
          <div className='goal-input-div'>
            <label>*Select your goal</label>
            <input type="text" placeholder='Choose the most relevant option' />
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9821 2.97144H9.97767C9.90937 2.97144 9.84508 3.00492 9.8049 3.05983L5.99999 8.30447L2.19508 3.05983C2.1549 3.00492 2.09062 2.97144 2.02231 2.97144H1.01785C0.930797 2.97144 0.879904 3.07054 0.930797 3.14153L5.65312 9.65179C5.82455 9.88751 6.17544 9.88751 6.34553 9.65179L11.0679 3.14153C11.1201 3.07054 11.0692 2.97144 10.9821 2.97144Z" fill="black" fillOpacity="0.25" />
            </svg>
          </div>
          <div className='city-input-div'>
            <label>*Select your city</label>
            <input type="text" placeholder='Choose the most relevant option' />
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9821 2.97144H9.97767C9.90937 2.97144 9.84508 3.00492 9.8049 3.05983L5.99999 8.30447L2.19508 3.05983C2.1549 3.00492 2.09062 2.97144 2.02231 2.97144H1.01785C0.930797 2.97144 0.879904 3.07054 0.930797 3.14153L5.65312 9.65179C5.82455 9.88751 6.17544 9.88751 6.34553 9.65179L11.0679 3.14153C11.1201 3.07054 11.0692 2.97144 10.9821 2.97144Z" fill="black" fillOpacity="0.25" />
            </svg>
          </div>
        </form>
        <button className='form-button'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Form