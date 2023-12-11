import React from 'react'

const Square = ({data, setList, list}) => {
    let temp = '';

    const ChangeCheck = ()=>{
        let listData = [...list];
        let changeData = data;

        changeData.data.done = !data.data.done;
        listData.splice(changeData.index,1,changeData.data);

        setList(listData);
    }

    if(!data?.change){
        if(data === true){
            temp = '진행 완료';
        }else if(data === false){
            temp = '진행 중';
        }else{
            temp = data;
        }
    }else{
        if(data.change === 'check'){
            temp = <button onClick={ChangeCheck}>완료</button>
        }else{
            temp = data.change;
        }
    }

    return (
        <div>
            {temp}
        </div>
    )
}

export default Square