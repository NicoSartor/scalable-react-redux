import reduceReducers from 'reduce-reducers';

const initialState = {
    message:'This string comes from the reducer'
}

function initReducer (state = initialState, action){
    switch(action.type) {
        case 'EXAMPLE_ACTION' :
            return{
                ...state,
            }

        default:
    }
    return state;
}

const MainReducer = reduceReducers( 
    initReducer, 
                //<-- other reducers are added here. the first on the list is the one to initialize the state.
)

export default MainReducer;