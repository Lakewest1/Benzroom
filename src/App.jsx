import {useEffect, useState} from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Background/Navbar/Navbar';
import Text from './Components/Background/Navbar/Text/Text';
import Latest from './Components/Background/Latest/Latest'
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import Section6 from './Components/Section6/Section6';
import Section7 from './Components/Section7/Section7';
import Gallery from './Components/Gallery/Gallery';
import Section8 from './Components/Gear/Gear';
import Model from './Components/Model/Model';
import Footer from './Components/Footer/Footer';
import SubscribeForm from '../SubscribeForm';



const App = () => {
  let heroData = [
       { text1: 'Want a comfortable drive?', text2: 'Benz is your choice' },
    { text1: 'Give into ', text2: 'Your Passion'},
    { text1: 'Dive into', text2: 'What you love' },

    
    
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

  {/* To change background after 3s */ }
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3500);
  },[])




  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Text
        setPlayStatus={setPlayStatus}
        heroData={heroData [heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Latest/>
      <hr />
      <Section2 />
      <hr />
      <Section3 />
      <hr />
      <Section4 />
      <hr />
      <Section5 />
      <hr />
      <Section6 />
      <hr />
      <Section7 />
      <hr />
      <Section8 />
      <hr />
      <Gallery />
      <hr />
      <Model />
      <hr />
      <Footer />
     
      

      
    </div>
  )
}

export default App
