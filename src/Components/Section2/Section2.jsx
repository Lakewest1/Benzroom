import './Section2.css'
import imageEngine from '../../assets/Engine3.jpg'


const Section2 = () => {

  return (
    
    <div className='Engine' id=''>
      <div className="left">
      <h1 id='#autoShow2'>Born To Perform,developed to outperform</h1>
        <p id='#autoShow2'>The heart of Mercedes-Benz beats with unparalleled precision and power, encapsulated within its iconic engines. Crafted with meticulous German engineering, each cylinder embodies a symphony of innovation and performance. From the relentless roar of the V8 to the whispering efficiency of the hybrid systems, every Mercedes-Benz engine is a testament to automotive excellence. With a lineage rich in heritage and a future driven by technological mastery, these engines propel dreams into reality, igniting highways with unrivaled vigor. They are not just machines; they are the embodiment of aspiration, forging a legacy of luxury, performance, and the relentless pursuit of perfection.</p>
      </div>
      <div className="right">
          <img src={imageEngine} alt="" />

      </div>
    
    </div>
    
  )
}

export default Section2
