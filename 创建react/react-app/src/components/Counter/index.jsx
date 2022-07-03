import React from 'react';

const Index = () => {
    const addHandler=(meal)=>{
        if(newCart.items.indexOf(meal)===-1){
            newCart.items.push(meal);
            meal.amount=1
        }
    }
    return (
        <div>
            <button className={counter.redu}>-</button>
            <span className={counter.number}>1</span>
            <button className={counter.add}>+</button>
        </div>
    );
}

export default Index;
