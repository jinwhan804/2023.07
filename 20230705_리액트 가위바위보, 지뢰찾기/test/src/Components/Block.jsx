import React from 'react'

const Block = ({data,name,result}) => {
    let temp = '';
    if(result != ''){
        if(name === '유저'){
            temp = result;
        }else{
            temp = result === '무승부' ? '무승부' : result === '승' ? '패' : '승'
        }
    }

  return (
    <div className='block'>
        <div>{name}</div>
        {/* react에서 이미지 불러오는 방법 */}
        {/* 리액트에서 많이 사용되는 조건부 랜더링 {}안에 조건문을 사용하면 값이 존재할 때만 사용함 */}
        {/* 만약 이런 조건부가 없으면 데이터가 없을 때 프로그램이 터진다 */}
        <img src={data && data.img} alt="" />
        <div>{temp}</div>
    </div>
  )
}

export default Block