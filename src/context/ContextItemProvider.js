import React, {createContext, useReducer} from 'react';

const initialState={
    rightItems:[],
    itemsCounter:0,
    
}

const reducer=(state, action)=>{
    
    switch(action.type){

        case "add-item":

            if(!state.rightItems.find((item)=> item.id === action.payload.id)){
                state.rightItems.push({
                    ...action.payload,
                    qty:1
                })
            }

            
            return{
                ...state,
                rightItems:[...state.rightItems]
            }

        case "remove":
            const removeItem= state.rightItems.filter((product)=> product.id !== action.payload.id)
            return {...state, rightItems:[...removeItem]}


        case "increase":
            const Index= state.rightItems.findIndex((item)=> item.id === action.payload.id)
            state.rightItems[Index].qty++
            return {...state}
            
        
        case "decrease":
            const Indexb= state.rightItems.findIndex((item)=> item.id === action.payload.id)
            state.rightItems[Indexb].qty--
            return {...state}

    }
}



export const ContextProvider= createContext();

const ContextItemProvider = ({children}) => {

    const [state, dispatch]=useReducer(reducer, initialState);
    console.log(state)
    

    return (
        <div>
            <ContextProvider.Provider value={{state, dispatch}}>
                {children}
            </ContextProvider.Provider>
        </div>
    );
};

export default ContextItemProvider;