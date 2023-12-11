let init = {
    id : '',
    pw : '',
    isLogin : false
}

function reducer(state = init, action){
    // 리듀서는 무조건 반환값이 있어야 한다.
    // 리듀서 함수에서 반환된 값을 스토어에 최신화 시켜준다.
    // 값만 변경하는게 아니라 주소값도 같이 작성해주어야 한다.
    // 새로운 주소를 만들어서 반환해줘야 한다.
    const {type, payload} = action;

    switch (type) {
        case 'LOGIN':
            
            return {...state, id : payload.id, pw : payload.pw, isLogin : true};
        case 'LOGOUT':
            
            return {...state, id : '', pw : '', isLogin : false};
    
        default:
            return state;
    }
}
export default reducer;