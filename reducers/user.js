export const initialState = {

        isLoggedIn: false,
        me: null,
        signUpData: {},
        LoginData:{}


}

//action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data  
    }

}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
    }

}
//store.dispatch(changeNickname('dddd'))

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                me:action.data
                  
            }
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                me: null,
 
            };
        default:
            return state;
    }
}

export default reducer;