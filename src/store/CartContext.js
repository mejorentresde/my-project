import { getDocs, getFirestore, collection, query, where, getDoc, doc } from "firebase/firestore";
import { createContext, useState, useContext } from "react";

export const CartContext = createContext({ cart: [] });
export const useCartContext = () => useContext(CartContext);

export const { Provider } = CartContext;


export function CartContextProvider({ children }) {
    //cart es el carrito
    //setCart es la funcion que usamos para sobreescribir el carrito en el state
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])


    const quantity = () => cart.reduce((sum, i) => { return parseInt(sum + i.cant) }, 0)
    //const total = () => cart.reduce((sum, i) => { return sum + i.cant * i.price }, 0)
    const total = () => cart.reduce((sum, i) => { return sum + i.cant * i.price }, 0)



    //isInCart es una funcion que devuevle true o false
    //true si el itemID esta en el carrito
    //false si el itemID no esta en el carrito
    const isInCart = (itemID, size) => {
        for (let index = 0; index < cart.length; index++) {
            let item = cart[index];
            if (itemID == item.id && item.size == size) {
                return true
            }
        }
        return false
    }



    //Agruegue un item al carrito
    //Si el item ya existe en el carrito, le sumamos la cantidad
    //Si el item no esta en el carrito, lo agregamos
    //Guardamos el nuevo carrito en el estado
    const addToCart = (item, cant, size) => {
        let itemIsInCart = isInCart(item.id, size) //es un booleano si el item esta en el carrito o no
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
            const newItem = { ...item, cant, size };
            const newCart = [...cart] //nuevo carrito con las mismas cosas que tiene el carrito existente
            newCart.push(newItem); //al nuevo carrito le agregamos el nuevo item
            setCart(newCart); //sobreescribir: al carrito del estado lo sobreescribimos con el nuevo carrito
        }
    }


    const GetProducts = () => {
        console.log("get prouts")

        // hacer lo que hiciste en products 
        const db = getFirestore()
        const Collection = collection(db, 'colection-1')
        return getDocs(Collection).then((snapshot) => {
            const productsList = []
            snapshot.docs.forEach((s) => {
                productsList.push({ id: s.id, ...s.data() })
            })
            console.log(productsList)

            setProducts(productsList); // guardamos los products
            
        })
    }

    const GetProductsByCategory = (categoryId) => {
        console.log("get prouts by cate", categoryId)
        if (categoryId) { // si me mandaron alguna categoryId
          //  return products.filter((product) => {
            //    return product.category == categoryId;
           // })

           const db = getFirestore()
            const Collection = collection(db, 'colection-1')
            const q = query(Collection, where("category", '==',categoryId))
            return getDocs(q).then((snapshot) => {
                const productsList = []
                snapshot.docs.forEach((s) => {
                    productsList.push({ id: s.id, ...s.data() })
                })
                console.log(productsList)
                setProducts(productsList); // guardamos los products
                
            })
        }
        else GetProducts()
       // return products
    }

    const GetProductById = (productId) => {
        console.log("get product b id", productId)
        const db = getFirestore()
    const Collection = collection(db, 'colection-1')
    const q = query(Collection, where("id", '==',Number(productId)))
        return getDocs(q).then((snapshot) => {
            const doc = snapshot.docs[0].data()
            console.log(doc)
            console.log(snapshot)
            setProduct(doc)
        })
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

    return (
        <Provider value={{cart, setCart, addToCart, removeFromCart, clearCart, quantity, total, GetProducts, GetProductsByCategory, products, product, GetProductById}}>
            {children}
        </Provider>
    )
}

export default useCartContext;