import ExpenseItem from './Components/ExpenseItemComponents/ExpenseItem'
import NewExpense from './Components/NewExpenseComponent/NewExpense'
import './css/App/App.min.css'

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
    { id: 'e5', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
    { id: 'e6', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
    { id: 'e7', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
    { id: 'e8', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
    { id: 'e9', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
    { id: 'e10', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
  ]
  console.table(expenses)
  return (
    <>
      <NewExpense />
      <div className={'expenses_container'}>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            )
          })}
        </div>
    </>
  )
}

export default App
