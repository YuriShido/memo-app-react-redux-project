export const ADD_CONTENTS = "ADD_CONTENTS"
export const SET_CONTENTS = "SET_CONTENTS"

export const addContents = (content) => ({
    type: ADD_CONTENTS,
    payload: content
})

export const setContents = (content) => ({
    type: SET_CONTENTS,
    payload: content
})
