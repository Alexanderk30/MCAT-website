import './App.css';
import ButtonAppBar from './components/appBar';

import { ButtonBase } from '@mui/material';

function App() {

  return (
    <div className="App">
    {/* everything we code will be in here */}
      
      <div id='LandingPageLargeOpening'>
        <ButtonAppBar/> 
      </div>
      <div id='LandingPageExampleSchedules'>
        <ButtonBase className='ExampleSchedule'>asd</ButtonBase>
        <ButtonBase className='ExampleSchedule'>asd</ButtonBase>
        <ButtonBase className='ExampleSchedule'>asd</ButtonBase>

      </div>
    </div>
  );
}

export default App;
