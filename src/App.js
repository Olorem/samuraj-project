import './App.css';
import Header  from './Header/Header.jsx';
import Profile from './Profile/Profile.jsx';
import LeftSideBar  from './LeftSideBar/LeftSideBar.jsx';
import RightSideBar from './RightSideBar/RightSideBar';
import Footer  from './Footer/Footer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs/Dialogs';



// function App({ state, addPost, inputChangeHandler }) {
  function App({ store }) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-wrapper">
        <LeftSideBar />
        <Route path="/profile" render={() => <Profile state={store.getState()} addPost={store.addPost.bind(store)} inputChangeHandler={store.inputChangeHandler.bind(store)} />}/>
        {/* <Route path="/home" component={Home}/> */}
        <Route path="/dialogs" render={() => <Dialogs messagesD={store._state.dialogsPage.messagesD} usersD={store._state.dialogsPage.usersD} />}/>
        <RightSideBar />
        <Footer />
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
