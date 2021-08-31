import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const messagesD = [{user: 'Valera', content: 'Hi'}, {user: 'Me',content: 'Hi'}, {user: 'Valera',content: 'keks go play some valo'}, {user: 'Me',content: 'ok'}];

const usersD = [{name: 'Sanya', id: 0}, {name: 'Vadim', id:1}, {name: 'Oleg', id:2},{name: 'Tolik', id:3},{name: 'Naruto', id:4},{name:'Kuplinov', id:5},]

const postsD = [{username: 'Eric Jonson', timeAgo: "just now", postText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"},
 {username: "Touka Kirishima", timeAgo: "35 min ago", postText: "I wanna be the Boshi"}, 
 {username: "Some Body", timeAgo: "once", postText: "Told me the world is gonna roll me"}];


ReactDOM.render(
  <React.StrictMode>
    <App usersD={usersD} messagesD={messagesD} postsD={postsD}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
