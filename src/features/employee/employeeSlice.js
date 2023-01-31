import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    filteredUsers: []
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        addEmployee:  (state,action) => {
            const user = action.payload
            state.users = [
                ...state.users,
                user
            ]
            console.log(state.users)
        },
        sortEmployees: (state, action) => {
            if (action.payload === "nume") {
                console.log(state.users)
                state.filteredUsers = state.users.sort(function (a,b){
                    let fa = a.nume.toLowerCase(),
                        fb = b.nume.toLowerCase();
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
            }
            else if (action.payload === "pret") {
                state.filteredUsers = state.users.sort(function (a,b){
                    return a.salariu - b.salariu
                })
            }
        },
        filterEmployees: (state, action) => {

            state.filteredUsers = state.users.filter(function(user) {
                if(action.payload === 'low') {
                    console.log(user)
                    return user.salariu < 2500
                }
                if(action.payload === 'medium') {
                    return user.salariu >= 2500 && user.salariu <= 4000
                }
                if(action.payload === 'high') {
                    return user.salariu > 4000
                }
            })
        }
    },
})

export const { addEmployee, sortEmployees, filterEmployees } = employeeSlice.actions

export default employeeSlice.reducer
