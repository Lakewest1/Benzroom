import './Text.css'
import arrow_btn from '../../../../assets/arrow_btn.png'
import play_icon from '../../../../assets/play_icon.png'
import pause_icon from '../../../../assets/pause_icon.png'

const Text = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p className='data'>{heroData.text1}</p>
        <p className='data'>{heroData.text2}</p>

      </div>
      <div className="Explore">
        <p>Check for more features</p>
        <a href=""><img src={arrow_btn} alt=""/></a>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
         <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
<li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
         
          
        </ul>
      
      <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="" />
          <p>Watch the move</p>
        </div>
        </div>

      
    </div>
  )
}

export default Text
