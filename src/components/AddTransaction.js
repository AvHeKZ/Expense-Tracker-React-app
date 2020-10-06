import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {

    const[text, setText] = useState('')
    const[amount, setAmount] = useState('')

    const { addTransaction, transactions } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            date: new Date()
          }
      
        addTransaction(newTransaction);
        setText('')
        setAmount('')
    }

    return (
        <div className='py-2'>
            <h5 style={{borderBottom:'1px solid black'}} className='py-3'>Add New Transaction</h5>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' placeholder='Enter Text...' className='form-control' value={text} onChange={e => setText(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>Amount</label>
                    <label>(negative - expense, positive - income)</label>
                    <input type='text' placeholder='Enter Amount...' className='form-control' value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <button className='btn btn-info btn-block'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
 