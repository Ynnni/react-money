import React from 'react'
import Expense from './expense.jsx'

export default class Expenses extends React.Component {
  constructor () {
    super()
    this.state = { expenses: [] }
    this.fetch()
  }

  fetch () {
    fetch(`${__API__}/expenses`)
    .then(response => response.json())
    .then(expenses => this.setState({ expenses: expenses }))
  }

  render () {
    var expenses = this.state.expenses.map((expense) => {
      return <Expense key={expense.id} id={expense.id} amount={expense.amount} date={expense.date} description={expense.description} />
    })

    return (
      <div className="Expenses">
        <h2 className="title">Expenses</h2>
        <a href="#/expenses/new" className="btn btn-primary">Create Expense</a>
        <hr/>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Id</td>
              <td>Amount</td>
              <td>Date</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            {expenses}
          </tbody>
        </table>
      </div>
    )
  }
}
