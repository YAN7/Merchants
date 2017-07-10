import { ActionTypes } from "../actions";

const StoreReducers = (state = {isLoading: true}, action)=> {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return Object.assign({}, {isLoading: action.isLoading})
    default:
      return state;
  }
}

export default StoreReducers;
