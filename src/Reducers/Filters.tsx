import { CHANGE_TEXT } from '../Constants/Constants';



const filter = (state = '', { type, text }) => {
  switch (type) {
    case CHANGE_TEXT:
      return text;
    default:
      return state;
  }
}

export default filter;
