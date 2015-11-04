import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Accounts from './components/accounts.jsx'
import Expenses from './components/expenses.jsx'
import ExpenseForm from './components/expense-form.jsx'

ReactDOM.render((
  <Router>
    <Route path="/">
      <Route path="/accounts" component={Accounts}/>
      <Route path="/expenses" component={Expenses}/>
      <Route path="/expenses/new" component={ExpenseForm}/>
    </Route>
  </Router>
)
,document.getElementsByClassName('container')[0])
