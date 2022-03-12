import { createStore } from "@reduxjs/toolkit";

/**
 * the action payload will have details of the form
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const accordionReducer = (state = [], action) => {
    if(localStorage.getItem("data").length > 0) {
        state = JSON.parse(localStorage.getItem("data"));
    }
    if(action.type = "ADD" && action.payload) {
        state = [];
        if(localStorage.getItem("data").length > 0) {
            state = JSON.parse(localStorage.getItem("data"));
        }
        state.push(action.payload);
        localStorage.setItem('data', JSON.stringify(state));
    } else if(action.type == "DELETE") {
        //  to be implemented
    } else if(action.type == "UPDATE") {
        //  to be implemented
    }
    return state;
};

export const dataStore = createStore(accordionReducer, []);