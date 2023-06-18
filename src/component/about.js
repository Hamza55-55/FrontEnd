import './decor.css';
const AboutUs=()=>{
    return (<div style={{ backgroundColor: ' #008080', height: '100vh' }}>
        {/* <hr></hr> */}
        <div className='row container'>
            <div className='col-md-5'>
                <img src='ABOUT.png' alt='about us'></img>
            </div>

            <div className='col-md-7'>
                <h1 className='head1'>AboutUs</h1>
                <p className='para'>Welcome to our Home Decors! We are a passionate team of interior design enthusiasts dedicated to creating beautiful and functional living spaces. With a focus on React, we combine modern technology with artistic flair to bring your home decor dreams to life.</p>
                <button className='btn btn-info' id='btn'>Read...</button>
            </div>

        </div>
    </div>);
}
export default AboutUs;