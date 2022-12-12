import ExpenseDate from './ExpenseDate'
import '../../css/Expenses/ExpenseItemStyles/ExpenseItem.min.css'
import { useState } from 'react'

interface ExpenseItemProps {
  key: string
  title: string
  amount: number
  date: Date
}

const ExpenseItem = (props: ExpenseItemProps) => {
  const [title, setTitle] = useState(props.title)
  const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD'
  }
  const AMOUNT = props.amount.toLocaleString('en-EN', currencyOptions)

  const updateTitleHandler = () => {
    console.log('update title!!')
  }

  return (
    <div className={'expense-item shadow border border-blue-200'}>
      <div className={'expense-item__description'}>
        <ExpenseDate date={props.date} />
        <h2 className={'text-slate-900 font-semibold text-xl'}>{title}</h2>
        <p className={'expense-item__price text-slate-900 text-2xl font-bold'}>{AMOUNT}</p>
        <button
          className={'expense-item__button bg-blue-600 hover:bg-blue-500 font-bold'}
          onClick={updateTitleHandler}
        >
          Update title
        </button>
      </div>
    </div>
  )
}

export default ExpenseItem
