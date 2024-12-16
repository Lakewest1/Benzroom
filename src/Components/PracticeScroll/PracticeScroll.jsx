
import image1 from '../../assets/35 SUV2.jpg'
import "./PracticeScroll.css"

function PracticeScroll() {
  //Functions for scrolling effect//

  //For left scrolling//
  const scrollLeft = () => {
    const scrollContainer = document.querySelector('.Scroll-container');
    scrollContainer.scrollBy({left:-300, behavior:'smooth'})
  }
  //For Right scrolling//
  const scrollRight = () => {
    const scrollContainer = document.querySelector('.Scroll-container');
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  }






  return (
   <div className="Scroll-box">
      <button className='scroll-button left' onClick={scrollLeft} >
        &lt;</button>
  
    <div className='Scroll-container'>
      <img src={image1} alt="" />
      <img src={image1} alt="" />
       <img src={image1} alt="" />
        <img src={image1} alt="" />
       <img src={image1} alt="" />
        <img src={image1} alt="" />
         <img src={image1} alt="" />
      <img src={image1} alt="" />
       <img src={image1} alt="" />
        <img src={image1} alt="" />
       <img src={image1} alt="" />
        <img src={image1} alt="" />
         <img src={image1} alt="" />
      <img src={image1} alt="" />
       <img src={image1} alt="" />
        <img src={image1} alt="" />
       <img src={image1} alt="" />
        <img src={image1} alt="" />
      
      </div>
       <button className='scroll-button right' onClick={scrollRight} >
        &gt;</button>

       </div>
  )
}

export default PracticeScroll
