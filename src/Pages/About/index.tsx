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
    </div>
  );
}
