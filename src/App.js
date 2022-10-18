import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseArray = [
    {
      title: "My Sneakers",
      date: new Date(2022, 9, 12),
      amount: 5000,
      location: "Pune",
    },
    {
      title: "Hoody",
      date: new Date(2022, 6, 9),
      amount: 2500,
      location: "Bangalore",
    },
    {
      title: "Pizza",
      date: new Date(2022, 8, 12),
      amount: 500,
      location: "Mumbai",
    },
    {
      title: "Clubbing",
      date: new Date(2022, 11, 31),
      amount: 10000,
      location: "Canberra",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenseArray[0].title}
        amount={expenseArray[0].amount}
        date={expenseArray[0].date}
        location={expenseArray[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseArray[1].title}
        amount={expenseArray[1].amount}
        date={expenseArray[1].date}
        location={expenseArray[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseArray[2].title}
        amount={expenseArray[2].amount}
        date={expenseArray[2].date}
        location={expenseArray[2].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseArray[3].title}
        amount={expenseArray[3].amount}
        date={expenseArray[3].date}
        location={expenseArray[3].location}
      >
        {" "}
      </ExpenseItem>
    </div>
  );
}

export default App;
