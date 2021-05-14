import React from "react";

const WarriorsReducer = (state = [], action) => {
  switch (action.type) {
    case "create-warriors-arr": {
      const { warriors } = action.payload;
      return [...state, ...warriors];
    }
    case "filtered-warriors": {
      const { checkValue } = action.payload;
      const newState = [];
      newState.push(state.filter(({name}) => name.includes(checkValue)))
  
      console.log(state)
      return newState[0]
    }
    default:
      return state;
  }
};

export default WarriorsReducer;
