import { useReducer, createContext } from 'react';
import cartReducer from './Cart.reducer';

type CartAction = { 
    type: 'ADD' | 'DEL'; 
    payload: any
 };

export const initialState = [];
export const CartContext = createContext<any>([]);


const CartProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);


    const onAddHandler = (details: any) => {
        const action: CartAction = {
            type: 'ADD',
            payload: details
        };
        dispatch(action);
    };


    const onDeleteHandler = (details: any) => {
        const action: CartAction = {
            type: 'DEL',
            payload: details
        };
        dispatch(action);
    };

    return (
        <CartContext.Provider value={{ state, onAddHandler, onDeleteHandler }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

