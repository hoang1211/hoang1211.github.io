import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools());

const selectColors = () => {
    const state = store.getState();

    const colors = state.showFavourite
        ? state.colors.filter((c) => c.favourite)
        : state.colors;

    return colors;
};

export default store;
export { selectColors };
