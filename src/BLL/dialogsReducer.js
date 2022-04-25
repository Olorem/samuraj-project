const DIALOGS_INPUT_CHANGE = "DIALOGS_INPUT_CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessageActionCreator = (u, c, id) => (
  {
    type: ADD_MESSAGE,
    user: u,
    content: c,
    id: id,
  }
);

export const textChangeActionCreator = (e) => (
  {
    type: DIALOGS_INPUT_CHANGE,
    e: e
  }
);

const initStateDialogs = {
  dialogs: [
    {name: 'Valera', id: 0, messages: [{user: 'Valera', content: 'HiVal'}, {user: 'Me', content: 'Hi'},  {user: 'Valera', content: 'keks go play some valo1'}, {user: 'Me', content: 'ok'}]}, 
    {name: 'Vadim', id: 1, messages: [{user: 'Vadim', content: 'HiVad'}, {user: 'Me', content: 'Hi'},  {user: 'Vadim', content: 'keks go play some valo2'}, {user: 'Me', content: 'ok'}]},
    {name: 'Oleg', id: 2, messages: [{user: 'Oleg', content: 'HiO'}, {user: 'Me', content: 'Hi'},  {user: 'Oleg', content: 'keks go play some valo3'}, {user: 'Me', content: 'ok'}] },
    {name: 'Tolik', id: 3, messages: [{user: 'Tolik', content: 'HiT'}, {user: 'Me', content: 'Hi'},  {user: 'Tolik', content: 'keks go play some valo4'}, {user: 'Me', content: 'ok'}] },
    {name: 'Naruto', id: 4, messages: [{user: 'Naruto', content: 'HiN'}, {user: 'Me', content: 'Hi'},  {user: 'Naruto', content: 'keks go play some valo5'}, {user: 'Me', content: 'ok'}] },
    {name: 'Kuplinov', id: 5, messages: [{user: 'Kuplinov', content: 'HiK'}, {user: 'Me', content: 'Hi'},  {user: 'Kuplinov', content: 'keks go play some valo6'}, {user: 'Me', content: 'ok'}] },
  ],
  inputTemp: "",
  currentDialog: 0,
};

export const dialogsReducer = (state = initStateDialogs, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        user: action.user || 'Me',
        content: action.content || 'bruh u posted cringe'
      };
      state.dialogs[action.id || 0].messages.push(newMessage);
      state.inputTemp = "";
    break;
    
    case DIALOGS_INPUT_CHANGE:
      state.inputTemp = action.e.target.value;
    break;

    default: break;
  }

  return state;
}