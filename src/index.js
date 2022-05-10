import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./BLL/redux-store";
import React from 'react';
import reactDom from 'react-dom';
import App from './App';

store.dispatch({
  type: "ADD-POST", 
  post: {
    username: "Alesha",
    timeAgo: "1 day ago",
    postText: 'pepeginio the frog',
  }
});


  reactDom.render(
    <React.StrictMode>
      {/* <App state={store._state} addPost={store.addPost} inputChangeHandler={store.inputChangeHandler}/> */}
      <App state={ store.getState() } dispatch={ store.dispatch.bind(store) }  />
    </React.StrictMode>,
    document.getElementById('root')
  );

// store.subscribe(renderWholeTree);

// renderWholeTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
