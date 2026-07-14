import { useEffect, useState } from "react";
import { getCart, removeCartItem } from "../services/bookService";
import CartItem from "../components/CartItem";

function Cart() {

    const [cart, setCart] = useState(null);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = async () => {
        try {
            const response = await getCart();
            setCart(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemove = async (id) => {

        try {

            await removeCartItem(id);

            alert("Item Removed");

            loadCart();

        } catch (error) {

            console.log(error);

        }

    };

    if (!cart) {

        return (
            <div className="container mt-5">
                Loading...
            </div>
        );

    }

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Shopping Cart
            </h2>

            {
                cart.cartItems.length === 0 ?

                <h4>No Items In Cart</h4>

                :

                cart.cartItems.map(item => (

                    <CartItem
                        key={item.id}
                        item={item}
                        removeItem={handleRemove}
                    />

                ))
            }

            <hr />

            <h3 className="text-end">
                Total : ₹{cart.totalAmount}
            </h3>

        </div>

    );
}

export default Cart;