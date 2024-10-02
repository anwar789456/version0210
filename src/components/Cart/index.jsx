import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { fetchProducts } from '@/api/fetchProducts';

export default function CartContainer({ isOpen, onClose }) {
  const cartRef = useRef(null);
const [cartItems, setCartItems] = useState([]);
const [loading, setLoading] = useState(true);
const [cartProducts, setCartProducts] = useState([]);

// Check if we are running in a browser environment
const isBrowser = typeof window !== 'undefined';

useEffect(() => {
  if (isBrowser) {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }
}, []);

const updatePrice = (updatedCartItems) => {
  let totalPrice = 0;
  const newCartItems = updatedCartItems.map((item) => {
    const price = getProductPrice(item.id);
    const totalItemPrice = price * item.quantity;
    totalPrice += totalItemPrice;
    return { ...item, totalItemPrice }; // Ensure totalItemPrice is updated
  });
  if (isBrowser) {
    localStorage.setItem('cartItems', JSON.stringify(newCartItems)); // Save updated items
  }
  setCartItems(newCartItems);
};

useEffect(() => {
  const getProducts = async () => {
    try {
      // Fetch all products from your API
      const fetchedData = await fetchProducts();
      const storedCartItems = isBrowser ? JSON.parse(localStorage.getItem('cartItems')) || [] : [];

      // Find the matching products from fetched data based on the IDs in the cart
      const productsInCart = storedCartItems.map((cartItem) => {
        const product = fetchedData.find((prod) => prod.idProd === cartItem.id);
        return product ? { ...product, quantity: cartItem.quantity } : null;
      }).filter((item) => item !== null); // Remove null items

      setCartProducts(productsInCart);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  if (isOpen) {
    getProducts();
  }
}, [isOpen]);

useEffect(() => {
  // Update the total price whenever cartItems change
  if (cartItems.length > 0) {
    updatePrice(cartItems);
  }
}, [cartItems]);

// Add this useEffect to listen for 'cartUpdated' event
useEffect(() => {
  const handleCartUpdated = () => {
    const updatedCartItems = isBrowser ? JSON.parse(localStorage.getItem('cartItems')) || [] : [];
    setCartItems(updatedCartItems); // Update the state with the new cart items
  };

  // Listen for the custom 'cartUpdated' event
  window.addEventListener('cartUpdated', handleCartUpdated);

  // Cleanup the event listener on unmount
  return () => {
    window.removeEventListener('cartUpdated', handleCartUpdated);
  };
}, []);

// Slide-in effect for the cart container
useEffect(() => {
  if (isOpen) {
    cartRef.current.style.transform = 'translateX(0)';
  } else {
    cartRef.current.style.transform = 'translateX(100%)';
  }
}, [isOpen]);

const getProductName = (id) => {
  const product = cartProducts.find((prod) => prod.idProd === id);
  return product ? product.nom : 'Unknown Product';
};

const getProductPrice = (id) => {
  const product = cartProducts.find((prod) => prod.idProd === id);
  return product ? product.minPrice : 0; // Return 0 if product is not found
};

const handleQuantityChange = (id, newQuantity) => {
  if (newQuantity < 1) return;
  const updatedCartItems = cartItems.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: newQuantity };
    }
    return item;
  });
  setCartItems(updatedCartItems);
};

const handleRemoveItem = (id) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== id);
  setCartItems(updatedCartItems);
  if (isBrowser) {
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }
  const event = new Event('cartUpdated');
  window.dispatchEvent(event);
};

// Display total price from localStorage
const totalPrice = cartItems.reduce((sum, item) => sum + (item.totalItemPrice || 0), 0);


    /*useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedData = await fetchProducts();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts();
  }, []);
*/
  // Fetch cart items from localStorage when the cart opens
  /*useEffect(() => {
    if (isOpen) {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(storedCartItems);
      cartRef.current.style.transform = 'translateX(0)';
    } else {
      cartRef.current.style.transform = 'translateX(100%)';
    }
  }, [isOpen]);*/

  return (
    <div className={styles.cartContainer} ref={cartRef}>
      <div className={styles.headerContainer}>
        <div className={styles.cartTitle}>
          <h1 className={styles.cartH1}>Cart</h1>
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={26}
            height={26}
            fill="currentColor"
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              strokeWidth=".5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.cartItemsContainer}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}><p className={styles.emptyCartText}>Your cart is empty.</p></div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <p>{getProductName(item.id)}</p>
                <p>Prix: {getProductPrice(item.id)}</p>
              </div>
              <div className={styles.itemActions}>
                <div className={styles.quantityController}>
                    <button className={styles.minusButton} onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="12" 
                            height="15" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="1" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            >
                            <path d="M5 12h14" />
                        </svg>
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button className={styles.plusButton} onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>
                <button className={styles.removeButton} onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
            <div className={styles.totalPrice}>
                <p className={styles.totalPriceText}>Total:</p>
                <p className={styles.totalPriceTextValue}>{totalPrice}<span className={styles.tndSign}>TND</span> </p>
            </div>
        )}
      </div>
    </div>
  );
}