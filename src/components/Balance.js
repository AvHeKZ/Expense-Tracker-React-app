import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

 const Balance = () => {

    const { transactions } = useContext(GlobalContext)


    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((x, y) => (x += y), 0).toFixed(2)  

    return (
        <div>
            <h1 className='text-center'>Total - ${total}</h1>
        </div>
    )
}



export default Balance
