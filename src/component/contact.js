import React from 'react';
import './decor.css';

const ContactUs = () => {
  return (
    <div style={{backgroundColor:'#008080',height:'100vh'}}>
      <div className='contact-container'>
        <h1 className='heading1' style={{fontFamily:'cursive'}}>Contact Us</h1>
        <p className='para'>
          We would love to hear from you! If you have any questions, suggestions, or inquiries regarding our home decor products and services, please feel free to reach out to us using the contact details below or by filling out the contact form. Our dedicated team will get back to you as soon as possible.
        </p>
        <div className='contact-details'>
          <div className='contact-info'>
            <h2 className='headin2'>Address</h2>
            <p className='para'>12 salmic Home Decor 19, Abbottabad, Pakistan</p>
          </div>
          <div className='contact-info'>
            <h2 className='headin2'>Phone</h2>
            <p className='para'>0344-9032576</p>
          </div>
          <div className='contact-info'>
            <h2 className='headin2'>Email</h2>
            <p className='para'>Salmic@gamil.com</p>
          </div>
        </div>
        <form className='contact-form'>
          <input type='text' placeholder='Enter Name' />
          <input type='email' placeholder='example@gmail.com' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
