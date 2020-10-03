import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

 

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)

    return (
        <div className='scroll'>
            <h5 style={{borderBottom: '1px solid black'}} className='py-3 mt-2'>History</h5>
            <ul className='list-group'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}

export default TransactionList
