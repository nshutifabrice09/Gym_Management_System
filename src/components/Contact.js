import React from 'react';



function Contact() {
  return (
    
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Provide Your Email' required/>
            <textarea placeholder='Write Here...' name='message'></textarea>
            <input type='submit' value='Send'/>
            {/* <div className='message' id='success'>Your Message Was Successfully Sent!
            </div>
              <div className='danger' id='danger'>Fields Can't Be Empty!
              </div> */}

              </form>
            </div>
        
    
    
  )
}

export default Contact;