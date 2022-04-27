import {ADD,SUBTRACT,MULTIPLY,DIVIDE} from "./actionType"

const initialState={
    count:0
}
export const reducer = (state = initialState, { type, value }) => {
	switch(type){
        case ADD:
             return {
               ...state,
            count: state.count + value
             };
             case SUBTRACT:
             return {
               ...state,
            count: state.count - value
             };
             case MULTIPLY:
             return {
               ...state,
            count: state.count * value
             };
             case DIVIDE:
             return {
               ...state,
            count: state.count / value
             };
            
             default:
                 return state
            }   
};