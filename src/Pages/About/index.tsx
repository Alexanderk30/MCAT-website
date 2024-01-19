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
      <h1>Why Use MCATPlanner?</h1>
      </div>
      <AboutCard/>
    </div>

  );
}
