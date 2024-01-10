import './App.css';
import ButtonAppBar from './components/appBar';
import imageFarLeft from "./assets/img/undraw_coding_re_iv62.svg";
import middleImage from "./assets/img/undraw_in_progress_re_m1l6.svg";
import farRight from "./assets/img/undraw_lightbulb_moment_re_ulyo (1).svg";
import { ButtonBase } from '@mui/material';

function App() {

  return (
    <div className="App">
    {/* everything we code will be in here */}
      
      <div id='LandingPageLargeOpening'>
        <ButtonAppBar/> 
      </div>
      <div id='LandingPageExampleSchedules'>
        <ButtonBase className='ExampleSchedule'> <img src={imageFarLeft}/></ButtonBase>
        <ButtonBase className='ExampleSchedule'><img src={middleImage}/></ButtonBase>
        <ButtonBase className='ExampleSchedule'><img src={farRight}/></ButtonBase>
        <ButtonBase className='TryExampleSchedules'>Try These Example Schedules</ButtonBase>
      </div>
    </div>
  );
}

export default App;
