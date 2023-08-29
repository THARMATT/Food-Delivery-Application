import React,{createContext,useContext,useReducer} from 'react';

const CartDispatchContext=createContext();
const CartStateContext=createContext();

const reducer=(state,action)=>{

}
export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(
    <CartDispatchContext.Provider value ={dispatch}>
        <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>);
}
export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext)