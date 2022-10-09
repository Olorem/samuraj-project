import './App.css';
import RightSideBar from './RightSideBar/RightSideBar';
import Footer from './Footer/Footer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
// import storeContext from './storeContext';
import store from './BLL/redux-store';
import { UsersContainer } from './Users/UsersContainer';
import HeaderContainer from './Header/HeaderContainer';
import LoginContainer from './Login/Login';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { initThunk } from './BLL/appReducer';
import Preloader from './Preloader/Preloader';




// function App({ state, addPost, inputChangeHandler }) {
const App = props => {

  useEffect(() => {
    props.initThunk();
  }, []);

  // useEffect(() => console.log("INITED??",props),[props]);
  console.log(props);
  // console.log(process.env);
  

  return (
    <BrowserRouter>
      { props.inited ? 
      <div className="App">
        <HeaderContainer />
        <div className="app-wrapper">
          <Route path="/profile/:userID?">
            <ProfileContainer />
          </Route>
          {/* <Route path="/home" component={Home}/> */}
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <RightSideBar />
          <Footer />
        </div>
      </div>
      :
      <Preloader />}
    </BrowserRouter>
  );
}

export default connect(state => ({ inited: state.app.isInitialized }), { initThunk })(App);
