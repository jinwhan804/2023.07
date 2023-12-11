import { Component } from 'react';

class Mycom extends Component{
    // 컴포넌트 구조는 같은데 내용이 다른 경우
    // props라는 값을 받아서 그려주면 된다.
    constructor (props){
        super(props);
        // 부모의 생성자 함수를 한 번 호출해줘야 this를 사용할 수 있다.
        this.state = {
            num : 1
        }
    }

    // 컴포넌트가 초기에 생성되면 
    // constructor -> render -> componentDidMount
    componentDidMount(){
        console.log('나 생성');
    }

    // 컴포넌트 상태가 변하면
    // 상태 변환 후 -> componentDidUpdate
    componentDidUpdate(){
        console.log(this.props.Cname + '의 상태 변함');
    }

    render(){
        return(
            <div className={'com ' + this.props.Cname}>
                {this.props.name}
                <button onClick={()=>{
                    this.setState({...this.state,num : this.state.num+=1})
                    console.log(this.state.num);
                }}>상태 변경</button>
            </div>
        )
    }
}

class Mycom2 extends Component{
    render(){
        return(
            <div>
                컴포넌트 임2
            </div>
        )
    }
}

// 다수의 컴포넌트를 내보낼 경우
export {Mycom,Mycom2};

// 단일로 보낼 경우
// export default Mycom;