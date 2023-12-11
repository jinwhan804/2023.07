let init = {
    isLogin : false,
    dishList : [{name : '떡볶이', price : 2000},{name : '오뎅', price : 1000},{name : '순대', price : 1500},{name : '튀김', price : 2000},{name : '계란', price : 500}],
    userSelect : []
}

function Reducer (state=init,action) {
    switch (action.type) {
        case 'LOGINCONDITION':
            
            return {...state, isLogin : action.payload};
        case 'DISHSELECT':
            
            return {...state, userSelect : action.payload};
    
        default:
            return {...state};
    }
}

export default Reducer;