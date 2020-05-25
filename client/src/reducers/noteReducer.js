export const noteState = {
    dummy: '',
  };
  
  export const noteReducer = (state = noteState, action) => {
    switch (action.type) {
      case 'DO_THING': {
        return {
          ...state,
        };
      }
      default:
        return state;
    }
  };
  