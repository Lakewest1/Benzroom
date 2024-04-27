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
    <div className="Latest">
      <h1>Our Latest <span>Products</span></h1>
      <div className="Latest-row">
          <div className="latest-col">
          <img src={EQG} alt="" />
          <h2>2025 EQG</h2>
          <h3>Starting at <span>$150,000</span> <i className='fa fa-Whatsapp'></i> </h3>

          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
           <div className="latest-col">
          <img src={EQB} alt="" />
          <h2>EQB 2024</h2>
          <h3>Starting at <span>$54,200</span></h3>
          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
        <div className="latest-col">
          <img src={AMG} alt="" />
          <h2> AMG GLC 2024</h2>
          <h3>Starting at <span>$ 58,150</span></h3>
          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
          <div className="latest-col">
          <img src={GLB} alt="" />
          <h2>GLB 2024</h2>
          <h3>Starting at <span>$44,450</span></h3>
          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
          <div className="latest-col">
          <img src={Gwagon} alt="" />
          <h2>2024 Gwagon</h2>
          <h3>Starting at <span>$143,000</span></h3>
          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
          <div className="latest-col">
          <img src={Maybach} alt="" />
          <h2>2024 Maybach</h2>
          <h3>Starting at <span>$199,450</span></h3>
          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
          <div className="latest-col">
          <img src={benzs} alt="" />
          <h2>2024 S350 class</h2>
          <h3>Starting at <span>$118,450</span></h3>
          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
           <div className="latest-col">
          <img src={EQS} alt="" />
          <h2>2024 EQS SUV</h2>
          <h3>Starting at <span>$104,400</span></h3>
          <a href="https://www.mbusa.com/en/inventory">View Inventory</a>
        </div>
       
          
         
        

      </div>
      
    </div>
  )
}

export default Latest
