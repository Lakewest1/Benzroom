import './Section4.css'; // Import the CSS file for styling
import image1 from '../../assets/inside2.jpg'; // Import the image from the assets folder

const Section4 = () => {
  return (
    <div className='Section4' id='Drive'>
      <h1>Drive like a Champion</h1>
      <p>
        Step into the future with Benz's latest marvel: a digital cockpit display that transcends imagination.
        Seamlessly blending elegance and innovation, it immerses drivers in a symphony of technology. With vivid
        visuals, intuitive controls, and unparalleled connectivity, it's more than a dashboard—it's a portal to a
        realm where driving becomes an enchanting experience.
      </p>
      <img src={image1} alt="Inside view of the Benz cockpit display" /> {/* Added a descriptive alt text for the image */}
    </div>
  );
}

export default Section4;
