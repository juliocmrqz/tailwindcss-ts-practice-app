import '../../css/Expenses/ExpenseDateStyles/ExpenseDate.min.css'
interface ExpenseDateProps {
  date: Date
}

const ExpenseDate = (props: ExpenseDateProps) => {
  const DAY = props.date.toLocaleString('en-US', { day: '2-digit' })
  const MONTH = props.date.toLocaleString('en-US', { month: 'long' })
  const YEAR = props.date.toLocaleString('en-US', { year: 'numeric' })
  return (
    <div className="expense-date bg-slate-900">
      <h6 className="expense-date__month text-base font-bold">{MONTH}</h6>
      <h6 className="expense-date__day text-xl">{DAY}</h6>
      <h6 className="expense-date__year text-sm">{YEAR}</h6>
    </div>
  )
}

export default ExpenseDate
