
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.modules.css';
import HomeTopWidget from './scenes/home/HomeTopWidget';
import { IoLogoFoursquare } from 'react-icons/io';
import Modal from './scenes/modal/Modal';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar';

import SearchComponent from './components/SearchComponent';
import IconsTopNavgigation from './components/iconsTopNavigation/IconsTopNavgigation';
import RightSideBar from './components/header/RightSideBar';
import IconsList from './components/iconsList/IconsList';
import Theme from './theme/Theme';
import TestApp from './test/TestApp';



function App() {

  


  return (
    <div className="App">



     

      <Header/>

 {/* <Modal/> */}
      <Modal/>
      
      <RightSideBar/>

      <div className="App-body"> 
       
       <HomeTopWidget/> 

       {/* <Sidebar/> */}
       <IconsTopNavgigation/>
       {/* <TestApp/> */}
       <IconsList />
      {/* //  style={{backgroundColor: Theme.colors.systemBackgroundColor}} */}
       
       {/* <IconsList style={{top: "80px", position: "fixed", zIndex: "2", backgroundColor: "green", }}/> */}
      </div>

    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }