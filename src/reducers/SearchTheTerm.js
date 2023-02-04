
const initialState = '';
const SearchTheTerm = (state = initialState, action) => {
    switch(action.type){
        case "SEARCHTERM": return action.payload;
        default: return state;
    }
}
export default SearchTheTerm;