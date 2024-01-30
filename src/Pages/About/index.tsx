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
import imageFarLeft from "../../assets/img/undraw_coding_re_iv62.svg";
import farRight from "../../assets/img/undraw_lightbulb_moment_re_ulyo (1).svg";
export default function AboutPage() {
  return (
    
    <div id="AboutPage">
       <ButtonAppBar/>
    <div id="Title">
      <h1>Create a Schedule Adapted to Your Needs</h1>
      </div>
          <div id="box1">
             <h2>Biochemistry Textbook Reading</h2>
             <p>10am-11am</p>
         </div>
      <div id="box2">
             <h2>Psychology Sociology Textbook Reading</h2>
             <p>8-9am</p>
      </div>
      <div id="box3">
        <h2>CARS Textbook Reading</h2>
        <p>2-4pm</p>
      </div>
      <div id="CardBar">
        <AboutCard Title={'Easy To Use'} Body={'Simply Select Your Resources and Get a Schedule In Seconds'}></AboutCard>
        <AboutCard Title={'Cover All Your Content'} Body={'Select All of Resources You Have Access To In Order To Further Personalize Your Schedule'}></AboutCard>
        <AboutCard Title={'sdsdsd'} Body={'sdsdsd'}></AboutCard>
        <AboutCard Title={'sdsdsd'} Body={'sdsdsd'}></AboutCard>
      </div>
      <div id="AboutPageBoxText1">
      <div id="Text1">
      {/* This is the text right below the cards on the about page */}
      <h2>Studying For The MCAT Can Be Scary... We Get That</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur augue et diam viverra blandit. Nunc semper euismod erat, a vestibulum diam gravida ac. In interdum at nibh id ornare. Aliquam et sagittis ante. Cras congue lectus at ornare eleifend. Aliquam mi lacus, iaculis quis interdum hendrerit, malesuada ac lacus. Phasellus ut augue dolor. Suspendisse metus eros, rutrum at maximus vel, sodales porttitor justo. Donec ut urna quis elit condimentum dignissim. Cras dignissim porttitor massa, eu sollicitudin sapien. Fusce sollicitudin posuere leo sit amet tempor. Proin luctus eros non sem placerat, in sagittis ante pretium. Vestibulum facilisis tempor nibh, a ultrices justo cursus vitae. Praesent ultrices velit risus, eu semper est aliquet vitae. Nulla eget dolor vitae ipsum lobortis tempor quis volutpat augue.</p>
      </div>
      <div id="image1">
        <img src={imageFarLeft} alt="a"/>
      </div>
      <div id="image2">
        <img src={farRight}/>
      </div>
      <div id="Text1">
        <h2>Studying For The MCAT Can Be Scary... We Get That</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur augue et diam viverra blandit. Nunc semper euismod erat, a vestibulum diam gravida ac. In interdum at nibh id ornare. Aliquam et sagittis ante. Cras congue lectus at ornare eleifend. Aliquam mi lacus, iaculis quis interdum hendrerit, malesuada ac lacus. Phasellus ut augue dolor. Suspendisse metus eros, rutrum at maximus vel, sodales porttitor justo. Donec ut urna quis elit condimentum dignissim. Cras dignissim porttitor massa, eu sollicitudin sapien. Fusce sollicitudin posuere leo sit amet tempor. Proin luctus eros non sem placerat, in sagittis ante pretium. Vestibulum facilisis tempor nibh, a ultrices justo cursus vitae. Praesent ultrices velit risus, eu semper est aliquet vitae. Nulla eget dolor vitae ipsum lobortis tempor quis volutpat augue.</p>
      </div>
      </div>
      </div>
  );
}
