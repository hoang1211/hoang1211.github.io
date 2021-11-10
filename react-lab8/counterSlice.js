import { INCREMENT, DECREMENT } from "./action";

const initState = {
  count: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};
