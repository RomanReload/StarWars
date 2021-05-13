import React from "react";

const WarriorsReducer = (state = [], action) => {
  switch (action.type) {
    case "create-warriors-arr": {
      const { warriors } = action.payload;
      return [...state, ...warriors];
    }
    case "filtered-warriors": {
      const { checkValue } = action.payload;
      console.log(checkValue)
      // const newState = [...state];
      // newState.filter((item) => {
      //   const {detail} = item;
      //   if(detail){
      //     console.log('Find this bick')
      //     return ;
      //   }
      //   return item
      // })
      // .map(item => {
      //   if(item.name.includes(checkValue)){
      //     return item
      //   }
      //   return state
      // });
      // return state = newState;
      return [...state]
    }
    default:
      return state;
  }
};

export default WarriorsReducer;
