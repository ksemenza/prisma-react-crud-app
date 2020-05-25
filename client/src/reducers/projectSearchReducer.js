export const projectSearchState = {
    dummy: '',
  };
  
  export const projectSearchReducer = (state = projectSearchState, action) => {
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