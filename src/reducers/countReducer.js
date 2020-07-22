import { INCREMENT, DECREMENT } from '../actions/countAction';

const countReducer = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.number ? state + action.number : state + 1;
    case DECREMENT:
      return action.number ? state - action.number : state - 1;
    default:
      return state;
  }
};

export default countReducer;
