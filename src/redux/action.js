import {ADD,SUBTRACT,MULTIPLY,DIVIDE} from "./actionType"
export const add = (value) => {
	return {
		type: ADD,
	    value
	};
};
export const subtract = (value) => {
	return {
		type: SUBTRACT,
	    value
	};
};
export const multiply = (value) => {
	return {
		type: MULTIPLY,
	    value
	};
};
export const divide = (value) => {
	return {
		type: DIVIDE,
	    value
	};
};