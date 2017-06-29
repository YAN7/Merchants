const AppReducers = (state = {isLoading: true}, action)=> {
  switch (action.type) {
    case "SET_LOADING":
      return {
        isLoading: action.isLoading,
      }
    default:
      return state;
  }
}

export default AppReducers;
