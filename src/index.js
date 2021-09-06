import './index.css';
import reportWebVitals from './reportWebVitals';
import {state, addPost} from './BLL/state'
import renderWholeTree from './render';

addPost({
  id: 5,
  username: "Alesha",
  timeAgo: "1 day ago",
  postText: 'pepeginio the frog',
});

renderWholeTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
