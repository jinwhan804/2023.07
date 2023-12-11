import { Component } from "react";
import {Mycom,Mycom2} from '../Components/Mycom'
import Mycom3 from '../Components/Mycom3'


export default class Main extends Component {
    render(){
        return(
            <>
            메인 페이지 <br/>
            {/* <Mycom Cname={'Mycom'}/>
            <Mycom2 /> */}
            <Mycom3 newNum={1} newNum2={2} newNum3={3}/>
            </>
        )
    }
}