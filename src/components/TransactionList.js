import React, { useContext, } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'
import giphy from '../img/giphy.gif'





 

const TransactionList = () => {

    const { transactions, clearAllUsers } = useContext(GlobalContext)

    const clearAll = () => {
        clearAllUsers()
    }

    return (
        <div className='Container Flipped'>
            <div style={{borderBottom: '1px solid black'}} className=' py-3 mt-2 d-flex justify-content-between align-items-center'>
            <h5 className='m-0'>Zamka's</h5> <img src={giphy} alt="loading..." style={{width: '35px', height: '35px'}} /> <button  onClick={clearAll}className='float-right btn btn-dark text-center btn-sm'>Clear All</button>
            </div>
            <ul className='list-group  '>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}

export default TransactionList
