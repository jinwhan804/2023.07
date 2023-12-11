// 요청과 응답을 처리할 때 axios 사용
import axios from 'axios';

function GetWeather(name){
    return async(dispatch)=>{
        // api 작업 데이터 요청
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=00e58ea8d90b22fcfa0f22d6723af331`);
        // 요청 처리가 끝나면
        dispatch({type : 'GET_WEATHER',payload : data});
    }
}

export const weather = {GetWeather};