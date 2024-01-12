import './App.css';
import ButtonAppBar from './components/appBar';
import imageFarLeft from "./assets/img/undraw_coding_re_iv62.svg";
import middleImage from "./assets/img/undraw_in_progress_re_m1l6.svg";
import farRight from "./assets/img/undraw_lightbulb_moment_re_ulyo (1).svg";
import { ButtonBase } from '@mui/material';
import MainPageCalender from "./assets/img/MCATwebsiteMainPageBackground.jpg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from './Pages/Home';
import AboutPage from './Pages/About';

// import HomepageCalender from"./assets/img/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
