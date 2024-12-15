import './Latest.css'


import EQG from '../../../assets/2025 EQG1.jpg'
import EQB from '../../../assets/Benz EQb.jpeg'
import AMG from '../../../assets/AMG GLC.jpeg'
import GLB from '../../../assets/GLB2024.jpg'
import Gwagon from '../../../assets/G wagon5.jpeg'
import Maybach from '../../../assets/May bach.jpeg'
import benzs from '../../../assets/Benz nocover4.jpeg'
import EQS from '../../../assets/EQS SUV.jpeg'

const Latest = () => {
  return (
    <div className="Latest" id='Latest'>
      <h1 id='autoShow'>Our Latest <span>Products</span></h1>
      <div className="Latest-row" id='#autoShow2'>
          <div className="latest-col" id='#autoShow2'>
          <img src={EQG} alt="" className='AmG-GLC' />
          <div className="bottom">
            <h2>2025 EQG</h2>
          <h3>Starting at <span>$150,000</span> <i className='fa fa-Whatsapp'></i> </h3>

          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
          </div>
          
        </div>
           <div className="latest-col"id='#autoShow2'>
          <img src={EQB} alt="" className='AmG-GLC' />
           <div className="bottom">
          <h2>EQB 2024</h2>
          <h3>Starting at <span>$54,200</span></h3>
            <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
            </div>
        </div>
        <div className="latest-col" id='#autoShow2'>
          <img src={AMG} alt="" className='AmG-GLC' />
           <div className="bottom">
          <h2> AMG GLC 2024</h2>
          <h3>Starting at <span>$ 58,150</span></h3>
            <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
            </div>
        </div>
          <div className="latest-col" id='#autoShow2'>
          <img src={GLB} alt="" className='AmG-GLC' />
           <div className="bottom">
          <h2>GLB 2024</h2>
          <h3>Starting at <span>$44,450</span></h3>
            <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
            </div>
        </div>
          <div className="latest-col" id='#autoShow2'>
          <img src={Gwagon} alt="" className='AmG-GLC-5' />
          <div className="bottom">
          <h2>2024 Gwagon</h2>
          <h3>Starting at <span>$143,000</span></h3>
            <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
            </div>
        </div>
          <div className="latest-col" id='#autoShow2'>
          <img src={Maybach} alt="" className='AmG-GLC' />
          <div className="bottom">
          <h2>2024 Maybach</h2>
          <h3>Starting at <span>$199,450</span></h3>
            <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
            </div>
        </div>
          <div className="latest-col" id='#autoShow2'>
          <img src={benzs} alt="" className='AmG-GLC' />
           <div className="bottom">
          <h2>2024 S350 class</h2>
          <h3>Starting at <span>$118,450</span></h3>
            <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
            </div>
        </div>
           <div className="latest-col" id='#autoShow2'>
          <img src={EQS} alt="" className='AmG-GLC' />
           <div className="bottom">
          <h2>2024 EQS SUV</h2>
          <h3>Starting at <span>$104,400</span></h3>
            <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
            </div>
        </div>
       
          
         
        

      </div>
      
    </div>
  )
}

export default Latest
