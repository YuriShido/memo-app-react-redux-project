export const ADD_CONTENTS = "ADD_CONTENTS"
export const SET_CONTENTS = "SET_CONTENTS"
export const UPDATE_CONTENTS = "UPDATE_CONTENTS"
export const DELETE_ITEM = "DELETE_ITEM"

export const addContents = (content) => ({
    type: ADD_CONTENTS,
    payload: content
})

export const setContents = (content) => ({
    type: SET_CONTENTS,
    payload: content
})

export const updateContents = (content) => ({
    type: UPDATE_CONTENTS,
    payload: content
})

export const deleteContents = (content) => ({
    type: DELETE_ITEM,
    payload: content
})
