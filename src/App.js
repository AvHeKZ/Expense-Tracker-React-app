import React from 'react';
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'


import './App.css';



const App = () => {
  return (
    <GlobalProvider>
      
      <div className='container1'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

