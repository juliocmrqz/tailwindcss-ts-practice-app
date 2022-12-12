import '../../css/NewExpense/NewExpenseStyles/NewExpense.min.css'
import NewExpenseForm from './NewExpenseForm'
/*=============================================================*/

const NewExpense = () => {
  const saveNewExpenseInformation = (enteredExpenseInformation: object) => {
    const idRandom = Math.random()
    const expenseInformation = {
      ...enteredExpenseInformation,
      id: idRandom.toString()
    }
    console.table(expenseInformation)
  }
  return (
    <div className="new-expense shadow border border-blue-200 bg-white">
      <NewExpenseForm onformSubmitHandler={saveNewExpenseInformation} />
    </div>
  )
}

export default NewExpense
