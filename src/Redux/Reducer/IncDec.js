const initialState = {
    initialValue: 0,
  };
  
  const IncDec = (state = initialState, action) => {
    switch (action.type) {
      case "Increment":
        return { initialValue: state.initialValue + 1 };
      case "Decrement":
        return { initialValue: Math.max(0, state.initialValue - 1) };
      default:
        return state;
    }
  };
  
  export default IncDec;
  