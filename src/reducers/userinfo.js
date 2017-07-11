import { UserAction } from "../actions";

const UserReducers = (state={}, action)=> {
  switch (action.type) {
    case "SET_USER_INFO": {
      Storage.save({
        key: "userInfo",
        data: action.user,
      });
      return Object.assign({}, state, {userInfo: action.user})
    }
    default:
    return state;
  }
}

export default UserReducers;
