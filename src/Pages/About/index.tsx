import './About.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import ButtonAppBar from '../../components/appBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, CardActions, Typography } from '@mui/material';
import AboutCard from '../../components/AboutCard';

export default function AboutPage() {
  return (
    
    <div id="AboutPage">
       <ButtonAppBar/>
    <div id="Title">
      <h1>We Personalize Every Schedule To Cater Your Needs</h1>
      </div>
          <div id="box1">
             <p>sdsds</p>
         </div>
      <div id="box2">
      </div>
      <div id="box3">
      </div>
      <div id="CardBar">
        <AboutCard Title={'Easy To Use'} Body={'Simply Select Your Resources and Get a Schedule In Seconds'}></AboutCard>
        <AboutCard Title={'Cover All Your Content'} Body={'Select All of Resources You Have Access To In Order To Further Personalize Your Schedule'}></AboutCard>
        <AboutCard Title={'sdsdsd'} Body={'sdsdsd'}></AboutCard>
        <AboutCard Title={'sdsdsd'} Body={'sdsdsd'}></AboutCard>
      </div>
      <div id="Text1"> 
      {/* This is the text right below the cards on the about page */}
      <p>sdsdsddsddsd</p>
      </div>
      </div>
  );
}
