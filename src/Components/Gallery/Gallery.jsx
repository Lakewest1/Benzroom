import './Gallery.css'
import image12 from '../../assets/Maybach-virgil.jpg'
import image13 from '../../assets/image5.jpg'
import image14 from '../../assets/EQG2025.jpg'
import image15 from '../../assets/G-Wagon.jpg'
import image16 from '../../assets/image6.jpg'
import image17 from '../../assets/EQS SUV3.jpeg'
import image18 from '../../assets/Gallery1.jpg'
import image19 from '../../assets/Gallery4.jpg'

const Gallery = () => {
  return (
    <div className='Gallery'>
       <h1>Gallery</h1>
      <div className="first">
        <div className="col">
      <img src={image12} alt="" />
      <img src={image15} alt="" />
      <img src={image16} alt="" />
      <img src={image17} alt="" />
        <img src={image18} alt="" />
          <img src={image19} alt="" />
           <img src={ image13} alt="" />
        <img src={image14} alt="" />
        </div>
          
      </div>
 

     
    </div>
  )
}

export default Gallery
