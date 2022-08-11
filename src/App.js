
import './App.css';
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
//import UilReact from '@iconscout/react-unicons/icons/uil-react';
//import TopButtons from "./components/TopButtons";
//import Inputs from "./components/Inputs";
//import TimeAndLocation from "./components/TimeAndLocation";


function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <Weather />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
