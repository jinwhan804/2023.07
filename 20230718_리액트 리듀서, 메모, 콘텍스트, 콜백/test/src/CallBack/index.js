// 메모이제이션 기법

// 동일한 연산을 할 때 이전에 연산된 값을 메모리에 저장해서 연산 시간을 줄이는 기법
// 실행 속도를 빠르게 해준다.

// 기본적인 방식
function Memo (n){
    return str(n);
}

function str (n){
    return `${n}`;
}

// 메모이제이션
let memo = {};

function Memo1(n){
    let result;
    // 메모리에 있는지 확인
    // memo 안에 n으로 들어온 키값이 존재하는지 확인, 있으면 true 반환
    if(n in memo){
        // 연산하지 않음
        result = memo[n];
    }else{
        result = str1(n);
        memo[n] = result;
    }

    return result;
}

function str1(n){
    return `${n}`;
}