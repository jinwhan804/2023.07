// 리듀서 함수

// 초기 상태가 필요한데 카운트 값 하나 초기로 설정
// 시작은 카운트
let init ={
    count : 0,
    isLogin : false,
    userData : {
        userName : '',
        userAge : 1
    }
}

// action을 받아서 확인
function reducer(state = init, action){
    console.log(action);
    // action 확인을 위한 조건문
    // 이 함수에서는 반환값이 무조건 필요하다.
    switch (action.type) {
        case '김치볶음밥':
            // 리듀서 함수의 반환값으로 저장소를 최신화 시켜준다.
            // 저장소는 대기하다가 리듀서가 호출되면 값을 반환 받아서 최신화 시켜준다.
            // 리듀서에서 변환된 값을 비교하는게 아니라 주소를 비교하기 때문에 단순히 값만 변해서는 모른다.
            // 따라서 주소가 바뀌지 않으면 업데이트가 이루어지지 않는다.
            return {...state, count : state.count + 1};
        case '계란볶음밥':
            
            return {...state, count : state.count - 1};
        case 'LOGIN':
            // 전역 상태를 개발하면서 브라우저의 개발자 모드로 전역 상태가 바뀌는걸 실시간으로 확인하고자 할 때 사용하는 모듈
            // npm install redux-devtools-extension
            return {...state, isLogin : action.payload};
        case 'LOGOUT':
            
            return {...state, isLogin : action.payload};
    
        default:
            return {...state};
    }
}

export default reducer;