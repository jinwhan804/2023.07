import styled from 'styled-components';

export const LoginBoxInput = styled.button`
    border: 1px solid red;
    width: 200px;
    height: 50px;
`

// 만들고자 하는 태그에 스타일을 적용시켜서 내보내 준다.
// & : 스타일이 적용되고 있는 대상. 이 뒤에 css에서 작성하듯 클래스 명을 넣어주면 해당 하는 태그에 적용된다.
export const LoginBoxwrap = styled.div`
    border : 1px solid;
    background-color: blue;
    /* 스타일을 동적으로 적용하고 싶다면 props값을 전달받아 아래와 같이 작성하여 사용해준다. */
    width: ${(props) => props.width || '500px'};
    height: 500px;
    & .login-title{
        color: white;
        font-size: 20px;
        text-align: center;
    }

    & ${LoginBoxInput}{
        background-color: red;
    }
`
