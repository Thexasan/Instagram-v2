import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modal1: false,
    modal2: false,
    idx : null,
}

export const slice  = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action){
            state.modal1 = true
        },
        closeModal(state, action){
            state.modal1 = false
        },
        openModalPost(state, action){
            state.modal2 = true
        },
        closeModalPost(state, action){
            state.modal2 = false
        },
        showIdUser(state, action){
            state.idx = action.payload
        }

    }
})

export const {openModal,closeModal,openModalPost,closeModalPost, showIdUser}= slice.actions


export default slice.reducer;