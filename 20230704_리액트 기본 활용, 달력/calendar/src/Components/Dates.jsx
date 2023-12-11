import React from 'react';

const Dates = ({dateSelect}) => {

    const DateFilter = ()=>{
        if(dateSelect <= 0 || dateSelect >= 32){
            return '';
        }else{
            return dateSelect;
        }
    }

    return (
        <div>{DateFilter()}</div>
    )
}

export default Dates