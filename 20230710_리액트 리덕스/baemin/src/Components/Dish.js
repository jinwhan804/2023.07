import React from 'react'
import {useDispatch,useSelector} from 'react-redux';

const Dish = ({name,price}) => {
    const dispatch = useDispatch();
    let select = useSelector(state=>state.userSelect);
    
    const SelectDish = ()=>{
        if(price != null){
            if(select.includes(name)){
                select.splice(select.indexOf(name),1);
    
                dispatch({
                    type : 'DISHSELECT',
                    payload : select
                })
            }else{
                select.push(name);
    
                dispatch({
                    type : 'DISHSELECT',
                    payload : select
                })
            }
        }
    }

    let pay;

    if(price != null){
        pay = price + '원'
    }

    return (
        <div className='dish' onClick={SelectDish}>
            {name}<br/>
            {pay}
        </div>
    )
}

export default Dish