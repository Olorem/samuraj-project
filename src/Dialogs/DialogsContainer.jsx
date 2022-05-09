
import React from "react";
import { addMessageActionCreator, textChangeActionCreator } from "../BLL/dialogsReducer";
import Dialogs from "./Dialogs";
import storeContext from "../storeContext";

// const testMessages = [['whats up', 'how is ur site?', 'ayooooooooo'],
// ['pepega lulw', 'kekw', 'omegalul'],
// ['lorem ipsum dolor sit amet', 'amen'],
// ['"few messages"'],
// ['konichiwa', 'kawai', 'baka'],
// ['this is the last one, nobody cares about last one']];




const DialogsContainer = ({ dialogsPage, dispatch }) => {
  // let textRef = React.createRef();
  

  return (
    <storeContext.Consumer>
      {
        store => {
          function addMessage(user, content, id) {
            store.dispatch(addMessageActionCreator(user, content, id))
          }
        
          function inputChange(text) {
            store.dispatch( textChangeActionCreator(text) );
          }

          return <Dialogs dialogs={store.getState().dialogsPage.dialogs} addMessage={addMessage} inputTemp={store.getState().dialogsPage.inputTemp} inputChange={inputChange} />
        }
      }
    </storeContext.Consumer>
  )
}

export default DialogsContainer