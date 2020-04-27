import { UPDATE_CONTENT , UPDATE_ID } from "../constants/action-types";

export const updateContent = (payload) => ({
    type: UPDATE_CONTENT,
    payload,
})

export const updateId = (payload) => ({
    type: UPDATE_ID,
    payload,
})



