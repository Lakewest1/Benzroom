import './Footer.css'
import image17 from '../../assets/logo2.jpg'
import image18 from '../../assets/lakewest.jpg'


const Footer = () => {
  return (
    <div className='Footer'>
      <div className="top">
        <div className="Vehicles">
          <h1>Vehicles</h1>
          <hr />
          <a href="">Suvs</a>
          <a href="">Sedans and Wagon</a>
          <a href="">Coupes</a>
          <a href="">Electric vehicle</a>
          <a href="">All vehicles</a>
          <a href="">Employer & member</a>
          <a href="">Fleet program</a>
            <a href="">Mercedez -Benz Vans</a>
        </div>
        <div className="Tools">
          <h1>Shopping Tools</h1>
          <hr />
          <a href="">Build</a>
          <a href="">Compare vehicles</a>
          <a href="">Find a Dealer</a>
          <a href="">View inventory</a>
          <a href="">Shopping Assist</a>
          <a href="">Special offer</a>
          <a href="">Financial service</a>
          <a href="">Shedule and test drive</a>
          <a href="">Trade in value</a>
        </div>
          <div className="Owner">
          <h1>Owners</h1>
          <hr />
          <a href="">Drive Pilot</a>
          <a href="">Mecedez me</a>
          <a href="">Owners support</a>
          <a href="">maintenance support </a>
          <a href="">owner manual</a>
          <a href="">Chargin</a>
          <a href="">Accessories</a>
          <a href="">Mobile App</a>
          <a href="">Vehicle information</a>
        </div>
         <div className="About">
          <h1>Discover Mercedes- Benz</h1>
          <hr />
          <a href="">About Us</a>
          <a href="">Our Impact</a>
          <a href="">Behind the star</a>
          <a href="">Electric </a>
          <a href="">Event & Partnership</a>
          <a href="">Careers</a>
          <a href="">Contact Us</a>
          <a href="">Mobile App</a>
          
        </div>
      </div>
      <div className="subscribe">
        <h1>Stay in Touch</h1>
        <hr />
        <p>Receive the latest News,Updates,Special offers and Exclusive</p>
        <div className="input-link">
          <div className="input">
            <input type="text" placeholder='Enter Your Email' />
            
            <a href="">Subscribe</a>
          </div>
          <div className="link">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
             
          </div>
        </div>
      </div>
      <div className="bottom">
      <div className="bottom-top">
        <img src={image17} alt="" />
        <div className="bottom-right">
            <p>Mercedes-Benz</p>
            <hr />
          <p>@2024 Mercedes-Benz USA,LLC</p>
          </div>
          </div>
      
      <div className="last-text">
        <a>Site Map</a>
        <a>Privacy & Legal Notices</a>
        <a>Do Not Share or Sell My Personal information</a>
        <a>Interest-Based Ads</a>
        <a>Accessibility</a>
        </div>
        </div>
      <div className="Lakewest">
        <p>Made with <i className="fa fa-heart"></i> by Olalekan Ismail
          | L@kewe$t |</p>
        <img src={image18} alt="" />
        </div>
        
      
    </div>
  )
}

export default Footer
