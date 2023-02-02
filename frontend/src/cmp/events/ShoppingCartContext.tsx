import {createContext, ReactNode, useContext, useState} from "react"
import {ShoppingCart} from "./ShoppingCart";
import {useLocalStorage} from "../../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContextType = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    _id: number,
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function clearCart(){
        setCartItems([])
    }

    function getItemQuantity(_id: number) {
        return cartItems.find(item => item._id ===_id)?.quantity || 0
    }

    function increaseCartQuantity(_id: number) {
        setCartItems(currItems => {
            if(currItems.find(item => item._id === _id) == null){
                return [...currItems, {_id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if(item._id === _id) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if(currItems.find(item => item._id === id)?.quantity === 1){
                return currItems.filter(item => item._id !== id)
            } else {
                return currItems.map(item => {
                    if(item._id === id) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id:number) {
        setCartItems(currItems => {
            return currItems.filter(item => item._id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                clearCart,
                cartItems,
                cartQuantity
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}