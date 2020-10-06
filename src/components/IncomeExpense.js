import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
    .filter(amount => amount > 0)
    .reduce((x, y) => (x += y), 0)
    .toFixed(2)

    const total = amounts.reduce((x, y) => (x += y), 0).toFixed(2)

    const expense = (amounts.filter(x => x < 0).reduce((x,y) => (x += y), 0) * -1 ).toFixed(2)

    return (
        <div className='card card-body ' style={boxShadow}>
            
            <div className='d-flex justify-content-between  '>
                <div>
                    <h4>Total</h4>
                    <p className='text-primary text-center'>${total}</p>
                </div>
                <div>
                    <h4>Income</h4>
                    <p className='text-success text-center'>${income}</p>
                </div>
                <div>
                    <h4>Exps</h4>
                    <p className='text-danger text-center'>${expense}</p>
                </div>
                
            </div>
        </div>
    )
}

const boxShadow = {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    backGroundColor: 'white'
}

export default IncomeExpense
