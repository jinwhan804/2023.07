let init = {
    user_id : '',
    nickname : ''
}

const reducer = (state = init, action)=>{
    const {type, payload} = action;

    switch (type) {
        case 'LOGIN':
            return {...state, user_id : payload.user_id, nickname : payload.nickname};
        case 'NOID':
            return {...state, msg : payload};
        case 'NOPW':
            return {...state, msg : payload};
        default:
            return state;
    }
}

export default reducer;