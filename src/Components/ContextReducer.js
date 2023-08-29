import React,{createContext,useContext,useReducer} from 'react';

const CartDispatchContext=createContext();
const CartStateContext=createContext();
// let dispatch=useDispatchCart(); 
const reducer=(state,action)=>{
switch(action.type){
    case"ADD":return[...state,{id:action.id,name:action.name,qty:action.qty,img:action.img,size:action.size,price:action.price}]
    default:console.log("error is reducer")
}
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