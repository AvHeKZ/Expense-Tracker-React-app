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

  return (<GlobalContext.Provider value={{
    transactions,
    addTransaction,
    deleteTransaction
    
  }}>
    {children}
  </GlobalContext.Provider>);
}