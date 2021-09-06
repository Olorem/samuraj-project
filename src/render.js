import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { addPost } from "./BLL/state";



function renderWholeTree(state) {
  reactDom.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderWholeTree;