import './Home.css';
import ButtonAppBar from '../../components/appBar';
import imageFarLeft from "../../assets/img/undraw_coding_re_iv62.svg";
import middleImage from "../../assets/img/undraw_in_progress_re_m1l6.svg";
import farRight from "../../assets/img/undraw_lightbulb_moment_re_ulyo (1).svg";
import { ButtonBase } from '@mui/material';
import MainPageCalender from "../../assets/img/MCATwebsiteMainPageBackground.jpg";
// import HomepageCalender from"./assets/img/

function Homepage() {
  return (
    <div className="Homepage">
    {/* homepage is not taking up all the space so */}
    {/* everything we code will be in here */}
      
      <div id='LandingPageLargeOpening'>
        <ButtonAppBar/> <img src={MainPageCalender}alt="d"/>
      </div>
      
      <div id='WebsiteDescription'>
        <h1>mcatPlanner</h1>
          <p>Welcome to the MCAT Study Plan Creator – Your Gateway to Success! 🚀Embark on your journey to conquer the MCAT with confidence using our dynamic study plan generator. Tailored to accommodate your unique learning style and schedule, our innovative tool crafts a personalized roadmap that optimizes your preparation for this critical examination.</p>
      
      </div>
      <div id='LandingPageExampleSchedules'>
        <ButtonBase className='ExampleSchedule'> <img src={imageFarLeft} alt="a"/></ButtonBase>
        <ButtonBase className='ExampleSchedule'><img src={middleImage}alt="b"/></ButtonBase>
        <ButtonBase className='ExampleSchedule'><img src={farRight}alt="c"/></ButtonBase>
        <ButtonBase className='TryExampleSchedules'>Click The Icons To Try These Example Schedules</ButtonBase>
      </div>
    </div>
  );
}

export default Homepage;
