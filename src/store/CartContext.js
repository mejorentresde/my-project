import { getDocs, getFirestore, collection } from "firebase/firestore";
import { createContext, useState, useContext, useEffect } from "react";
import ItemCount from "../components/ItemCount";

export const CartContext = createContext({ cart: [] });
export const useCartContext = () => useContext(CartContext);

export const { Provider } = CartContext;


export function CartContextProvider({ children }) {
    //cart es el carrito
    //setCart es la funcion que usamos para sobreescribir el carrito en el state
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([])


    const quantity = () => cart.reduce((sum, i) => { return sum + i.cant }, 0)
    const total = () => cart.reduce((sum, i) => { return sum + (i.cant * i.price) }, 0)

    //isInCart es una funcion que devuevle true o false
    //true si el itemID esta en el carrito
    //false si el itemID no esta en el carrito
    const isInCart = (itemID) => {
        for (let index = 0; index < cart.length; index++) {
            let item = cart[index];
            if (itemID == item.id) {
                return true
            }
        }
        return false
    }



    //Agruegue un item al carrito
    //Si el item ya existe en el carrito, le sumamos la cantidad
    //Si el item no esta en el carrito, lo agregamos
    //Guardamos el nuevo carrito en el estado
    const addToCart = (item, cant) => {
        const itemIsInCart = isInCart(item.id) //es un booleano si el item esta en el carrito o no
        if (itemIsInCart) {
            const newCart = cart.map((itemInCart) => {
                if (itemInCart.id == item.id) {
                    const copyItem = { ...itemInCart }
                    copyItem.cant += cant;
                    return copyItem
                }
                else {
                    return itemInCart;
                }
            })
            setCart(newCart); //sobreescribimos el carrito con el nuevo

        }
        else {
            const newItem = { ...item, cant };
            const newCart = [...cart] //nuevo carrito con las mismas cosas que tiene el carrito existente
            newCart.push(newItem); //al nuevo carrito le agregamos el nuevo item
            setCart(newCart); //sobreescribir: al carrito del estado lo sobreescribimos con el nuevo carrito
        }
    }


    const GetProducts = () => {
        console.log(3);
        // hacer lo que hiciste en products 
        console.log(4);
        const db = getFirestore()
        const Collection = collection(db, 'colection-1')
        return getDocs(Collection).then((snapshot) => {
            console.log(5);
            const productsList = []
            snapshot.docs.forEach((s) => {
                console.log(s.data());
                productsList.push({ id: s.id, ...s.data() })
            })
            setProducts(productsList); // guardamos los products
            
        })
    }

    const getProductsByCategory = (categoryId) => {
        if (categoryId) { // si me mandaron alguna categoryId
            return products.filter((product) => {
                return product.category == categoryId;
            })
        }
        return products
    }


    /*const getBottoms = () => {
        return bottoms;
    }*/


    const removeFromCart = (id) => {
        const newCart = [...cart];
        //map: cambiar (mapear) los objetos de una lista
        //filter: borrame (o quedate) con los que cumplan cierta condicion. Devolver true si no lo queres borrar. Devolver false si lo queres borrar.
        const cartFilter = newCart.filter((itemInCart) => { //no me borres los que cumplen cierta condicion
            const itemIDontWantToDelete = itemInCart.id != id;
            return itemIDontWantToDelete
        });
        setCart(cartFilter);
    }

    const clearCart = () => {
        setCart([])
    }


    const contextFunction = () => console.log("Contexto listo");

    return (
        <Provider value={{ contextFunction, cart, setCart, addToCart, removeFromCart, clearCart, quantity, total, GetProducts, getProductsByCategory }}>
            {children}
        </Provider>
    )
}

export default useCartContext;