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

  const [quantities, setQuantities] = useState({});

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
    // // Check if the item already exists in the cart
    const isDuplicate = data.some(item => item._id === newData._id);
    if (isDuplicate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This item is already in the cart!",
      });
      return;
    }

    // // Add categoryId to newData

    setData(prevData => [...prevData, newData]);
    setCount(prevCount => prevCount + 1);
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
    setData(prevData => prevData.filter(item => item._id !== id));
    setCount(prevCount => Math.max(prevCount - 1, 0)); // Prevent negative count
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
      <CounterContext.Provider value={{ count, addData, data, removeItemById, quantities, setQuantity }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default ContextProvider;

// clearCheckedData, toggleItemChecked, removeItemById, clearCart , data