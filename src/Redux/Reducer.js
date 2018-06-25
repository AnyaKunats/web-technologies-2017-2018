const initialState = {
    value: [],
organizations:[]
}
function todoApp(state = initialState, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                value: action.filter
            });
        default:
            return state;
    }
};
export default todoApp;