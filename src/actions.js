import uuid from 'uuid'; //losowe generowanie identyfikatorów

//akcje
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const addComment = text => ({
    text,
    id: uuid.v4(),
    type: ADD_COMMENT,
    });

export const removeComment = id => ({
    id,
    type: REMOVE_COMMENT,
});

export const editComment = (id, text) => ({
    id,
    text,
    type: EDIT_COMMENT,
});

export const thumbUpComment = id => ({
    id,
    type: THUMB_UP_COMMENT,
});

export const thumbDownComment = id => ({
    id,
    type: THUMB_DOWN_COMMENT,
});