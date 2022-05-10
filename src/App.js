import './App.css';
import Header  from './Header/Header.jsx';
import LeftSideBar  from './LeftSideBar/LeftSideBar.jsx';
import RightSideBar from './RightSideBar/RightSideBar';
import Footer  from './Footer/Footer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
// import storeContext from './storeContext';
import { Provider } from 'react-redux';
import store from './BLL/redux-store';
import { UsersContainer } from './Users/UsersContainer';



// function App({ state, addPost, inputChangeHandler }) {
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="app-wrapper">
          <LeftSideBar />
          <Route path="/profile">
            <ProfileContainer />
          </Route>
          {/* <Route path="/home" component={Home}/> */}
          <Route path="/dialogs" render={() => <DialogsContainer  />}/>
          <Route path="/users" render={() => <UsersContainer  />}/>
          <RightSideBar />
          <Footer />
          </div>
        </div>
      </Provider>
    </BrowserRouter>);
}

export default App;
