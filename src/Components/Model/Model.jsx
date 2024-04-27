import './Model.css'
import image16 from '../../assets/35 SUV.jpg'

const Model = () => {
  return (
    <div className='Model'>
      <h1>Model line up</h1>
      <div className="up">
        <a href="">AMG GLA 35 SUV</a>
         <a href="">$56,450 MSRP</a>
          <a href=""><span>Engine</span> AMG-enhanced 2.0 inline-$ turbo with hybrid assist</a>
      </div>
      <div className="display">
          <img src={image16} alt="" />
          <hr />
        <div className="display1">
            <p><span className='num'>5.1</span> <small>sec</small><br /> Acceleration <br /> <span className='fig'>0-60mph</span></p>
            <hr />
            <p><span className='num'>303</span> <small>hp</small><br /> Power <br /> <span className='fig'>@ 5800 rpm</span></p>
            <hr />
           <p><span className='num'>295</span> <small>lb-ft</small><br />Torque<br /> <span className='fig'>@ 3,000 -4,000 rpm</span></p>
        </div>
           <div className="btn">
          <a href="" className='Build'>Build</a> <br />
          <a href="" className='view'>View Spec </a>
        </div>
     
        </div>
      
    </div>
  )
}

export default Model
