import './App.css';
import Header  from './Header/Header.jsx';
import Profile from './Profile/Profile.jsx';
import LeftSideBar  from './LeftSideBar/LeftSideBar.jsx';
import RightSideBar from './RightSideBar/RightSideBar';
import Footer  from './Footer/Footer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper">
        <LeftSideBar />
        <Route path="/profile" component={Profile}/>
        {/* <Route path="/home" component={Home}/> */}
        <Route path="/dialogs" component={Dialogs}/>
        <RightSideBar />
        <Footer />
        </div>
      </div>
    </BrowserRouter>);
}



export default App;
