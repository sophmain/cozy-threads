import {createContext, useState, useEffect} from 'react'
import { getProductInfo } from '../utils/getProductById'

export const CartContext = createContext({
items: [],
getProductQuantity: () => {},
addOneToCart: () => {},
removeOneFromCart: () => {},
deleteFromCart: () => {},
totalCost: 0,
isLoading: false

})

export function CartProvider({children}){
const [cartProducts, setCartProducts] = useState([])
const [totalCost, setTotalCost] = useState(0)
const [isLoading, setIsLoading] = useState(false)

function getProductQuantity(id) {
   const quantity = cartProducts.find(product => product.id === id)?.quantity
   if (quantity){
    return quantity
   } else {
    return 0
   }
}

function addOneToCart (id){
    const quantity = getProductQuantity(id)
    if (quantity === 0){ // product not in cart yet
        setCartProducts([...cartProducts, {id: id, quantity: 1}])
    } else {
        setCartProducts(
        cartProducts.map((cartItem)=>
            cartItem.id === id ?
{...cartItem, quantity: cartItem.quantity + 1} :
cartItem



        )
    )
    }
}

function deleteFromCart(id){
    setCartProducts(
        cartProducts.filter(product => product.id !== id)
    )
}

function removeOneFromCart(id){
    const quantity = getProductQuantity(id)
    if(quantity === 1){
        deleteFromCart(id)
    } else {
        setCartProducts(
            cartProducts.map((cartItem)=>
                cartItem.id === id ?
    {...cartItem, quantity: cartItem.quantity - 1} :
    cartItem



            )
        )
    }
}

    // Fetch the total cost and store it in state
    async function calculateTotalCost() {
        let total = 0;
        setIsLoading(true);
        for (const cartItem of cartProducts) {
            try {
                const productInfo = await getProductInfo(cartItem.id);
                total += productInfo.priceInCents * cartItem.quantity;
            } catch (e) {
                console.error('Error fetching product info:', e);
            }
        }
        setTotalCost(total / 100);
        setIsLoading(false);
    }

    useEffect(() => {
        if (cartProducts.length > 0) {
            calculateTotalCost();  // Calculate total cost when cart items change
        } else {
            setTotalCost(0);  // Reset total cost if cart is empty
        }
    }, [cartProducts]);


const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    totalCost,
    isLoading
}
    return <CartContext.Provider value={contextValue}>
{children}
    </CartContext.Provider>
}


export default CartProvider;
