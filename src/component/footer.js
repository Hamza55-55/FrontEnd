import './decor.css';
import { FaInstagram, FaWhatsapp, FaTwitter, FaPinterest } from 'react-icons/fa';

const InstagramIcon = () => <FaInstagram color="#E1306C" />;
const WhatsappIcon = () => <FaWhatsapp color="#25D366" />;
const TwitterIcon = () => <FaTwitter color="#1DA1F2" />;
const PinterestIcon = () => <FaPinterest color="#E60023" />;

const Footer=()=>{
    return(
        <div className='division'>
        <hr/>
            <div className='d1'>
          
            <h2>---Help---</h2>
<p>MY ACCOUNT</p>
<p>ORDER TRACKING</p>
<p>STORE LOCATION</p>
</div>

<div className='d2'> 

<h2>---Customer Support---</h2>
<p>PRIVACY</p>
<p>TERMS & CONDITIONS</p>
<p>RETURN & EXCHANGE POLICY</p>
</div>

<div className='d3'>

<h2>---Information---</h2>
   <h5><span>Email :</span> Salmic@gmail.com</h5>

<h5><span>WhatsApp Chat :</span>0344-9032576</h5> 

<h5><span>Call :</span> 0344-9032576</h5>

<h5>Customer services timing<h6>Monday-Sunday
10:00 am to 6.30 pm</h6></h5>
<br></br>
<p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>


<form class="d-flex" style={{width:'25rem'}}>
        <input class="form-control me-2" type="search" placeholder="your-email@example.com" aria-label="Search"  />
        <button class="btn btn-success" style={{backgroundColor:'skyblue',fontWeight:'bold'}}>Subscribe</button>
      </form>
     
</div>

<div className="social-icons">
<p>Follow us on </p>
    <InstagramIcon />
    <WhatsappIcon />
    <TwitterIcon />
    <PinterestIcon />
   
    <h4 class='heading4'>Salmic 2023</h4>
  </div>




        </div>
    );
}
export default Footer;