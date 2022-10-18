import './ExpenseItem.css'

function ExpenseItem() {
const expenseItem = 'Bike Service'
const expenseDate = new Date(2022,9,18)
const price = 2500
const location = 'Pune'
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseItem}</h2>
        <div>{location}</div>
        <div className='expense-item__price'>Rs.{price}</div>
       
      </div>
    </div>
  );
}

export default ExpenseItem;
