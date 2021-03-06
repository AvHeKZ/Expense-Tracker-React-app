import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <li className={transaction.amount < 0 ? 'Content minus d-flex justify-content-between list-group-item my-1' : 'Content plus d-flex justify-content-between list-group-item my-1'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className='btn btn-sm btn-danger delete-btn'>Delete
            </button>
            
        </li>
    )
}
