import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// createSlice메서드를 사용해서 create함수를 가지고 있는 객체를 만듬
export const countSlice = createSlice({
    // slice 함수를 구분하기 위한 이름
    name : 'count',
    // 초기값
    initialState : {num : 0},
    reducers : {
        add : (state)=>{
            // 이전 상태가 매개 변수로 들어온다.
            state.num += 1;
        },
        remove : (state)=>{
            state.num -= 1;
        }
    }
});

export const temp = createAsyncThunk('/temp',async(name)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=00e58ea8d90b22fcfa0f22d6723af331`)
    const {data} = resp;
    console.log(data);
    return data;
})

export const countSlice1 = createSlice({
    // slice 함수를 구분하기 위한 이름
    name : 'count1',
    // 초기값
    initialState : {num : 0, value : '상태'},
    reducers : {
        add1 : (state)=>{
            // 이전 상태가 매개 변수로 들어온다.
            state.num += 1;
        },
        remove1 : (state)=>{
            state.num -= 1;
        }
    },
    // 비동기 처리를 위한 reducer 작업 공간
    extraReducers : (builder)=>{
        // extraReducers의 builder로 매개 변수를 받고 케이스 추가
        // 상태 케이스 : 로딩중, 완료, 실패
        builder.addCase(temp.pending, (state, action)=>{
            console.log(action)
            state.value = '로딩 중';
        })
        builder.addCase(temp.fulfilled, (state, action)=>{
            console.log(action)
            state.value = '완료'
        })
        builder.addCase(temp.rejected, (state, action)=>{
            console.log(action)
            state.value = '실패'
        })
    }
});

// 액션 함수를 내보내서 dispatch로 전달해서 액션 발생시킴
export const {add, remove} = countSlice.actions;
export const {add1, remove1} = countSlice1.actions;