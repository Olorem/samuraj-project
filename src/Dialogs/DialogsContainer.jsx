
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { addMessageActionCreator, textChangeActionCreator } from "../BLL/dialogsReducer";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";
import { updateStatusThunk } from "../BLL/profileReducer";

// const testMessages = [['whats up', 'how is ur site?', 'ayooooooooo'],
// ['pepega lulw', 'kekw', 'omegalul'],
// ['lorem ipsum dolor sit amet', 'amen'],
// ['"few messages"'],
// ['konichiwa', 'kawai', 'baka'],
// ['this is the last one, nobody cares about last one']];




// const DialogsContainer = ({ dialogsPage, dispatch }) => {
//   // let textRef = React.createRef();
  

//   return (
//     <storeContext.Consumer>
//       {
//         store => {
//           function addMessage(user, content, id) {
//             store.dispatch(addMessageActionCreator(user, content, id))
//           }
        
//           function inputChange(text) {
//             store.dispatch( textChangeActionCreator(text) );
//           }

//           return <Dialogs dialogs={store.getState().dialogsPage.dialogs} addMessage={addMessage} inputTemp={store.getState().dialogsPage.inputTemp} inputChange={inputChange} />
//         }
//       }
//     </storeContext.Consumer>
//   )
// }

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  inputTemp: state.dialogsPage.inputTemp,
  user: state.profilePage.user,
  isAuth: state.authReducer.isAuthorized,
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (user, content, id) => dispatch(addMessageActionCreator(user, content, id)),
  inputChange: (text) => dispatch( textChangeActionCreator(text) ),
  // updateStatusThunk: updateStatusThunk(), // doesnt work!! fix
  updateStatusThunk
})


const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);


// connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));


export default DialogsContainer