import React, { createContext, useState, useEffect } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

// Create the context
export const CounterContext = createContext();

// Create a provider component
const ContextProvider = ({ children }) => {

  // Load data from localStorage on initial render
  const getStoredCount = () => {
    return parseInt(localStorage.getItem('vicCartCount')) || 0;
  };
  const getStoredData = () => {
    const storedData = localStorage.getItem('vicCartData');
    return storedData ? JSON.parse(storedData) : [];
  };

  const [count, setCount] = useState(getStoredCount());
  const [data, setData] = useState(getStoredData());
  const [isDuplicateItem, setIsDuplicateItem] = useState({});
  const [quantities, setQuantities] = useState({});

      // ✅ CartSidebar state
    const [showCartSidebar, setShowCartSidebar] = useState(false);
    const openCartSidebar = () => setShowCartSidebar(true);
    const closeCartSidebar = () => setShowCartSidebar(false);

  const setQuantity = (productId, qty) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: qty,
    }));
  };




  // Save data and count to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('vicCartData', JSON.stringify(data));
    localStorage.setItem('vicCartCount', count.toString());
  }, [count]);

  // Function to add data to cart
const addData = (newData) => {
  const isDuplicate = data.some(item => item._id === newData._id);

  if (isDuplicate) {
    setIsDuplicateItem(prev => ({
      ...prev,
      [newData._id]: true
    }));
    return false; // Already exists
  }

  // Add new item to cart
  setData(prevData => [...prevData, newData]);
  setCount(prevCount => prevCount + 1);

  // Set isDuplicateItem for this product to true (added)
  setIsDuplicateItem(prev => ({
    ...prev,
    [newData._id]: true
  }));

  return true;
};

  // Function to clear only checked data
  //   const clearCheckedData = () => {
  //     const checkedCount = data.filter(item => item.checked).length;
  //     setData(prevData => prevData.filter(item => !item.checked));
  //     setCount(prevCount => Math.max(prevCount - checkedCount, 0)); // Prevent negative count
  //   };

  // Function to toggle checked state of an item
  //   const toggleItemChecked = (id) => {
  //     setData(prevData =>
  //       prevData.map(item =>
  //         item._id === id ? { ...item, checked: !item.checked } : item
  //       )
  //     );
  //   };

  // Function to remove an item by ID
const removeItemById = (id) => {
  // Remove the item from data
  setData(prevData => prevData.filter(item => item._id !== id));

  // Decrease the count safely
  setCount(prevCount => Math.max(prevCount - 1, 0));

  // Remove the duplicate flag for this ID
  setIsDuplicateItem(prev => {
    const updated = { ...prev };
    if (updated.hasOwnProperty(id)) {
      delete updated[id]; // ✅ Cleanly remove key
    }
    return updated;
  });
};

  // Function to completely clear the cart
  //   const clearCart = () => {
  //     setData([]);
  //     setCount(0);
  //     localStorage.removeItem('cartData');
  //     localStorage.removeItem('cartCount');
  //   };


  return (
    <>
      {/* <ToastContainer/> */}
      <CounterContext.Provider value={{ count, addData, data, removeItemById, quantities, setQuantity, isDuplicateItem , showCartSidebar,
                openCartSidebar,
                closeCartSidebar }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default ContextProvider;

// clearCheckedData, toggleItemChecked, removeItemById, clearCart , data