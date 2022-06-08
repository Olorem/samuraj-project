import './App.css';
import RightSideBar from './RightSideBar/RightSideBar';
import Footer  from './Footer/Footer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
// import storeContext from './storeContext';
import { Provider } from 'react-redux';
import store from './BLL/redux-store';
import { UsersContainer } from './Users/UsersContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';



// function App({ state, addPost, inputChangeHandler }) {
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
        <HeaderContainer />
          <div className="app-wrapper">
          <Route path="/profile/:userID?">
            <ProfileContainer/>
          </Route>
          {/* <Route path="/home" component={Home}/> */}
          <Route path="/dialogs" render={() => <DialogsContainer  />}/>
          <Route path="/users" render={() => <UsersContainer  />}/>
          <Route path="/login" render={() => <Login  />}/>
          <RightSideBar />
          <Footer />
          </div>
        </div>
      </Provider>
    </BrowserRouter>);
}

export default App;
