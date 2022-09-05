

const checkItem=(state, id)=>{
    const result = !!state.rightItems.find((item)=> item.id === id)
    return result
}

const counter=(state, id)=>{
    const Index =  state.rightItems.findIndex((item)=> item.id ===id)
    if(Index === -1){
        return false
    }
    else{
        return state.rightItems[Index].qty
    }
}

const splitNumber=(number)=>{
    return Number(number.toFixed(3)).toLocaleString() + '$'
}


export  {checkItem, counter, splitNumber};


