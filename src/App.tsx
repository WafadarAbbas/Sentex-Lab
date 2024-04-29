import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import AboutUs from './screens/AboutUs';
import Home from './screens/Home';
import Services from './screens/Services';
import Portfolio from './screens/Portfolio';
import ContactUs from './screens/ContactUS';
import Blog from './screens/Blog';
import Blockchainpage from './components/blogpages/Blockpage';
import SecuringIot from './components/blogpages/SecuringIot';
import Hyperledger from './components/blogpages/Hyperledger';
import Web from './components/blogpages/Web';

import WebDev from './screens/Services/WebDev';
import MobileDev from './screens/Services/MobileDev';
import ArtificialIntelligence from './screens/Services/ArtificialIntelligence';
import StaffAugmentation from './screens/Services/StaffAugmentation';
import Node from './screens/Services/WebDevelopment/Node';
import Laravel from './screens/Services/WebDevelopment/Laravel';
import ReactDev from './screens/Services/WebDevelopment/ReactDev';
import Wordpress from './screens/Services/WebDevelopment/Wordpress';
import Ios from './screens/Services/AppDevelopment/Ios';
import Android from './screens/Services/AppDevelopment/Android';
import Native from './screens/Services/AppDevelopment/Native';
import Flutter from './screens/Services/AppDevelopment/Flutter';
import Robotic from './screens/Services/Artificial Intelligence/Robotic';
import BigData from './screens/Services/Artificial Intelligence/BigData';
import Nlp from './screens/Services/Artificial Intelligence/Nlp';

















const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/blogs" element={<Blog/>} />
      <Route path="/Blockchain" element={<Blockchainpage/>} />
      <Route path="/Securing_Iot" element={<SecuringIot/>} />
      <Route path="/Web" element={<Web/>} />
      <Route path="/Hyperledger" element={<Hyperledger/>} />
      <Route path="/WebDevelopment" element={<WebDev/>} />
      <Route path="/MobileDevelopment" element={<MobileDev/>} />  
      <Route path="/ArtificialIntelligence" element={<ArtificialIntelligence/>} />
      <Route path="/StaffAugmentation" element={<StaffAugmentation/>} />

      {/* ------Web Development------- */}
      <Route path="/react" element={<ReactDev/>} />
      <Route path="/Node" element={<Node/>} />
      <Route path="/Laravel" element={<Laravel/>} />
      <Route path="/Wordpress" element={<Wordpress/>} />

        {/* -----App Development------- */}
        <Route path="/Ios" element={<Ios/>} />
        <Route path="/Android" element={<Android/>} />
        <Route path="/Native" element={<Native/>} />
        <Route path="/Flutter" element={<Flutter/>} />

        <Route path="/Robotic" element={<Robotic/>} />
        <Route path="/BigData" element={<BigData/>} />
        <Route path="/Nlp" element={<Nlp/>} />
      

      

      
    
    </Routes>
  </Router>
  );
};

export default App;



