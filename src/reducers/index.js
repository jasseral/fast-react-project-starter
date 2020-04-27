import { UPDATE_CONTENT , UPDATE_ID } from "../constants/action-types";
import initialState from "../constants/initialState"



const rootReducer = (state = initialState() ,action) => {
  
  switch(action.type){
    case UPDATE_CONTENT:
    return {
      ...state,
      content : action.payload
    }
    case UPDATE_ID:
    
    return{
      ...state,
      id : action.payload
    }  
    
    default:
    return state
  }
  
}

export default rootReducer