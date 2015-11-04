import React from 'react'
import Select from 'react-select'

export default class ExpenseForm extends React.Component {
  constructor () {
    super()
    this.state = {
      amount: 0,
      date: (new Date).toJSON().replace(/T.*$/,''),
      description: null,
      currency_id: null,
      account_id: null,
      category_id: null,
    }
  }

  handleChange (e) {
    this.state[e.target.name] = e.target.value
    this.setState(this.state)
  }

  handleAccountChange (value) {
    this.state.account_id = value
    this.setState(this.state)
  }

  handleCategoryChange (value) {
    this.state.category_id = value
    this.setState(this.state)
  }

  handleCurrencyChange (value) {
    this.state.currency_id = value
    this.setState(this.state)
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    // send form this
  }

  accountsOptions (input) {
    return fetch(`${__API__}/accounts`)
      .then(response => response.json())
      .then((json) => {
        return {
          options: json
        }
      });
  }

  categoriesOptions (input) {
    return fetch(`${__API__}/categories/expenses`)
      .then(response => response.json())
      .then((json) => {
        return {
          options: json
        }
      });
  }

  currenciesOptions (input) {
    return fetch(`${__API__}/currencies`)
      .then(response => response.json())
      .then((json) => {
        return {
          options: json
        }
      });
  }

  render () {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="account_id">Account</label>
          <Select id="account_id"
                  name="account_id"
                  value={this.state.account_id}
                  valueKey="id"
                  labelKey="name"
                  autoload={true}
                  asyncOptions={this.accountsOptions.bind(this)}
                  onChange={this.handleAccountChange.bind(this)}/>
        </div>

        <div className="form-group">
          <label htmlFor="category_id">Category</label>
          <Select id="category_id"
                  name="category_id"
                  value={this.state.category_id}
                  valueKey="id"
                  labelKey="name"
                  asyncOptions={this.categoriesOptions.bind(this)}
                  onChange={this.handleCategoryChange.bind(this)}/>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" className="form-control" id="amount" name="amount" value={this.state.amount} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <label htmlFor="currency_id">Currency</label>
          <Select id="currency_id"
                  name="currency_id"
                  value={this.state.currency_id}
                  valueKey="id"
                  labelKey="name"
                  asyncOptions={this.currenciesOptions.bind(this)}
                  onChange={this.handleCurrencyChange.bind(this)}/>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" className="form-control" id="date" name="date" value={this.state.date} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" className="form-control" name="description" id="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Create Expense
          </button>
        </div>
      </form>
    )
  }
}
