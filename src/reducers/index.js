const AppReducers = (state = {isLoading: false}, action)=> {
  switch (action.type) {
    case "HAHA":
      return {
        isLoading: true,
      }
    default:
      return state;
  }
}

export default AppReducers;
