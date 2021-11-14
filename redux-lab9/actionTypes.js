export const NEW_COLOR = "newColor";
export const TOGGLE_COLOR = "likeColor";
export const SHOW_FAVOURITE = "showFavourite";

export const newColor = (name, color) => ({
    type: NEW_COLOR,
    payload: { name, color },
});

export const toggleColor = (id) => ({ type: TOGGLE_COLOR, payload: id });
export const showFavourite = () => ({ type: SHOW_FAVOURITE });
