import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer'


export const GlobalContext = createContext();

export const GlobalProvider = ({ children}) => {

  const [transactions, dispatch] = useReducer(AppReducer, [], () => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : [];
  })


  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function clearAllUsers() {
    dispatch({
      type: 'CLEAR_USERS',
    })
  }

  return (<GlobalContext.Provider value={{
    transactions,
    addTransaction,
    deleteTransaction,
    clearAllUsers
    
  }}>
    {children}
  </GlobalContext.Provider>);
}