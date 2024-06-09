import { useEffect } from "react";
// import logo from './logo.svg';
import "./App.modules.css";
import "./theme/theme.css";
import HomeTopWidget from "./scenes/home/HomeTopWidget";
// import { IoLogoFoursquare } from 'react-icons/io';
import Modal from "./components/modal/Modal";
import Header from "./components/header/Header";
// import Sidebar from './components/Sidebar';

// import SearchComponent from './components/SearchComponent';
import IconsTopNavgigation from "./components/iconsTopNavigation/IconsTopNavgigation";
import RightSideBar from "./components/header/RightSideBar";
import IconsList from "./components/iconsList/IconsList";
// import Theme from './theme/Theme';
// import TestApp from './test/TestApp';
// import NotificationMessage from './components/NotificationMessage';

import useLocalStorage from "use-local-storage";
import DropdownOptions from "./components/dropdown/DropdownOptions";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [
    theme,
    // setTheme
  ] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  useEffect(() => {
    // window.location.href = '/';

    if (theme === "dark") {
      document.body.style.backgroundColor = "#202124";
    } else {
      document.body.style.backgroundColor = "#F6F7F9";
    }

    // if (window.location.pathname  !== "/licenses" && window.location.pathname  !== "/icons") {
    //   window.location.pathname = "/icons"
    // }
    console.log("test");
  }, []);

  // useEffect(() => {
  //   // window.location.href = '/';
  //   window.location.hash = "#testg"
  // }, [])

  return (
    <div id={"app"} className="App" data-theme={theme}>
      {/* <div style={{position: "fixed",backgroundColor: "red", height: "100vh", width: "100%", zIndex: "100"}}/> */}

      <Header />

      <DropdownOptions />

      {/* <Modal/> */}
      <Modal />

      <RightSideBar />

      <div className="App-body">
        <HomeTopWidget />

        {/* <Sidebar/> */}
        <IconsTopNavgigation />
        {/* <TestApp/> */}
        <IconsList />
        {/* //  style={{backgroundColor: Theme.colors.systemBackgroundColor}} */}

        {/* <IconsList style={{top: "80px", position: "fixed", zIndex: "2", backgroundColor: "green", }}/> */}
      </div>

      {/* <div id={"notificationDiv"}>
      <NotificationMessage/>
      </div> */}
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
