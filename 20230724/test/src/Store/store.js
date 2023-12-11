import {configureStore} from '@reduxjs/toolkit';
import { countSlice, countSlice1 } from '../features/countSlice';

export const store = configureStore(
    {
        reducer : {
            // countSlice에서 만든 reducer 전달
            count : countSlice.reducer,
            count1 : countSlice1.reducer
        }
    }
)